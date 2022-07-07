import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
} from 'class-validator';
import { REGISTRATION_STATUS } from 'src/config';


export class AddressDto {
  @ApiProperty()
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  public readonly street: string; //street

  @ApiProperty()
  @MaxLength(55)
  @IsString()
  @IsNotEmpty()
  public readonly city: string; // city

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  public readonly zipcode: string; // zipcode

  @ApiProperty()
  readonly geo: any;
}