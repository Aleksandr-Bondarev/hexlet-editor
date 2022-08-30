import { Module } from '@nestjs/common';
import { SnippetsController } from './snippets.controller';
import { SnippetsService } from './snippets.service';

@Module({
  controllers: [SnippetsController],
  providers: [SnippetsService],
  exports: [SnippetsService],
})
export class SnippetsModule {}
