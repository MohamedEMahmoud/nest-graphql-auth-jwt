import { userProvider } from './../user/user.provider';
import { UserModule } from './../user/user.module';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';

@Module({
  imports: [UserModule],
  providers: [AuthService, AuthResolver, ...userProvider]
})
export class AuthModule { }
