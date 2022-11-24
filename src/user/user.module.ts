import { userProvider } from './user.provider';
import { DatabaseModule } from './../database/database.module';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';

@Module({
  imports: [DatabaseModule],
  providers: [UserResolver, UserService, ...userProvider],
  exports: [UserService]
})
export class UserModule { }
