import { Module } from '@nestjs/common';
import { MusiсService } from './musiс.service';
import { MusiсController } from './musiс.controller';

@Module({
  controllers: [MusiсController],
  providers: [MusiсService],
})
export class MusiсModule {}
