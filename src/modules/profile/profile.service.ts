import { Inject, Injectable } from '@nestjs/common';
import { request } from 'http';
import { address } from 'src/entities/address.details.entity';
import { company } from 'src/entities/company.details.entity';
import { profile_Details } from 'src/entities/profile.details.entity';
import { RegistrationRequestDto } from './dto/registrations.request.dto';

@Injectable()
export class ProfileService {
    constructor(
        @Inject('PROFILE_REPOSITORY') private readonly PROFILE_REPOSITORY: typeof profile_Details,
        @Inject('ADDRESS_REPOSITORY') private readonly ADDRESS_REPOSITORY: typeof address,
        @Inject('COMPANY_REPOSITORY') private readonly COMPANY_REPOSITORY: typeof company,

    ) { }

    async profileRegister(requestDto: RegistrationRequestDto) {

        const postdata1 = await this.ADDRESS_REPOSITORY.create({
            street: requestDto.address.street,
            city: requestDto.address.city,
            zipcode: requestDto.address.zipcode,
            geo: requestDto.address.geo,
        })

        const postdata2 = await this.COMPANY_REPOSITORY.create({
            company_name: requestDto.company.company_name,
            catchparse: requestDto.company.catchparse,
            bs: requestDto.company.bs,
            company_type: requestDto.company.company_type
        })

        const postdata3 = await this.PROFILE_REPOSITORY.create({
            address_id: postdata1.id,
            company_id: postdata2.id,
            name: requestDto.name,
            username: requestDto.username,
            email: requestDto.email,
            role: requestDto.role,
            phone: requestDto.phone,
        });

        return { message: "data added successfully" }
    }


    async getProfile(profileId) {
        const getProfile = await this.PROFILE_REPOSITORY.findAll({
            where: { id : profileId.id },
            attributes: ['id', 'name', 'username', 'email', 'role', 'phone'],
            include: [
                {
                    model: address,
                    attributes: ['street', 'city', 'zipcode', 'geo'],
                },
                {
                    model: company,
                    attributes: ['company_name', 'catchparse','bs', 'company_type']
                }
            ]
        })
        return { data : getProfile}
    }
}
