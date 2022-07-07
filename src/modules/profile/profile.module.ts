import { Module } from '@nestjs/common';
import { addressProviders } from 'src/providers/address.providers';
import { companyProviders } from 'src/providers/company.providers';
import { ProfileProviders } from 'src/providers/profile.details.providers';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';

@Module({
  controllers: [ProfileController],
  providers: [ProfileService,...ProfileProviders,...addressProviders,...companyProviders]
})
export class ProfileModule {}
