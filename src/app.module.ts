import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MusiсModule } from './musiс/musiс.module';
import { UserModule } from './user/user.module';
import { MessageModule } from './message/message.module';

@Module({
  imports: [AuthModule, MessageModule, MusiсModule, UserModule,],
  controllers: [],
  providers: [],
})
export class AppModule { }
