import { ApiProperty } from '@nestjs/swagger';
import {IsEnum,IsNotEmpty,IsNumber,IsString,IsUUID,MaxLength,} from 'class-validator';
import { ROLE } from 'src/config';
import { AddressDto } from './address.dto';
import { CompanyDto } from './company.dto';
// import { validateEmail } from '../../src/validations/decorator/email';

export class RegistrationRequestDto{
  @ApiProperty()
  @MaxLength(24)
  @IsString()
  @IsNotEmpty()
  public readonly name: string; //name

  @ApiProperty()
  @MaxLength(24)
  @IsString()
  @IsNotEmpty()
  public readonly username: string; // username

  @ApiProperty()
  @MaxLength(255)
  // @validateEmail({ message: 'Invalid email format' })
  @IsNotEmpty()
  public email: string; // email

  @ApiProperty()
  @IsEnum(ROLE)
  @IsNotEmpty()
  public readonly role: ROLE; // role

  @ApiProperty()
  @IsNotEmpty()
  public readonly phone: string; // phone

  @ApiProperty()
  @IsNotEmpty()
  address: AddressDto;

  @ApiProperty()
  @IsNotEmpty()
  company: CompanyDto;

}