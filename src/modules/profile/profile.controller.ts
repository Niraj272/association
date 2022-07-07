import { Body, Controller, Get, Post } from '@nestjs/common';
import { GetProfileDto } from './dto/get.profile.dto';
import { RegistrationRequestDto } from './dto/registrations.request.dto';
import { ProfileService } from './profile.service';

@Controller('v1/profile_registration')
export class ProfileController {
  constructor(private profileservice: ProfileService){}

    @Post()
    async profileRegister(@Body() requestDto: RegistrationRequestDto):Promise<any>{
        return await this.profileservice.profileRegister(requestDto);
    }

    @Get()
    async getProfile(@Body() profileId:GetProfileDto):Promise<any>{
        return await this.profileservice.getProfile(profileId);
    }
}