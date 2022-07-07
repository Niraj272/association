import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ProfileModule } from './modules/profile/profile.module';

@Module({
  imports: [DatabaseModule,ProfileModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
