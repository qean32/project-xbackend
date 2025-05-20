import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MessagesModule } from './messages/messages.module';
import { MusiсModule } from './musiс/musiс.module';

@Module({
  imports: [UsersModule, AuthModule, MessagesModule, MusiсModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
