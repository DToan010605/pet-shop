import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwt: JwtService) {}

  async register(data: { email: string; password: string; name?: string }) {
    const exists = await this.prisma.user.findUnique({ where: { email: data.email } });
    if (exists) throw new ConflictException('Email đã tồn tại');

    const hash = await bcrypt.hash(data.password, 10);
    return this.prisma.user.create({
      data: { email: data.email, password: hash, name: data.name },
      select: { id: true, email: true, name: true, role: true }
    });
  }

  async login(email: string, password: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) throw new UnauthorizedException('Sai email hoặc mật khẩu');

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) throw new UnauthorizedException('Sai email hoặc mật khẩu');

    const token = await this.jwt.signAsync({ sub: user.id, role: user.role });
    return { token };
  }
}
