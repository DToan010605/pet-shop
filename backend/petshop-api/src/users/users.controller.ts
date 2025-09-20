import { Controller, Get, Headers, UnauthorizedException } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import * as jwt from 'jsonwebtoken';
import { PrismaService } from '../prisma/prisma.service';


@ApiTags('users')
@ApiBearerAuth()
@Controller('users')
export class UsersController {
  constructor(private prisma: PrismaService) {}

  @Get('me')
  async me(@Headers('authorization') auth?: string) {
    if (!auth?.startsWith('Bearer ')) throw new UnauthorizedException();
    const token = auth.slice(7);
    const payload = jwt.verify(token, process.env.JWT_SECRET!) as any;

    return this.prisma.user.findUnique({
      where: { id: payload.sub },
      select: { id: true, email: true, name: true, role: true, createdAt: true },
    });
  }
}
