import { Injectable, OnModuleInit, OnModuleDestroy } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

// Decorator to make this class injectable as a service
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy{
    constructor(){
        super({
            log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
        });
    }
    async onModuleInit(){
        try{
            await this.$connect();
            console.log('Database connected successfully');
        }catch(error){
            console.error('Database connected fail', error);
            process.exit(1);
        }
    }
    async onModuleDestroy(){
        await this.$disconnect();
        console.log('Database disconnected');
    }
    async cleanDatabase() {
        if (process.env.NODE_ENV === 'production') {
            throw new Error('Cannot clean database in production');
        }
        const tables = await this.$queryRaw<Array<{ tablename: string }>>`
        SELECT tablename
        FROM pg_tables
        WHERE schemaname = 'public'
        `;
        // TRUNCATE tất cả (trừ _prisma_migrations), reset sequence, cascade
        await this.$transaction(
        tables
            .filter(t => t.tablename !== '_prisma_migrations')
            .map(t =>
            this.$executeRawUnsafe(
                `TRUNCATE TABLE "public"."${t.tablename}" RESTART IDENTITY CASCADE;`
            )
        )
    );
  }
}