import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MessagesModule } from './messages/messages.module';
import { MusiсModule } from './musiс/musiс.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [AuthModule, MessagesModule, MusiсModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
