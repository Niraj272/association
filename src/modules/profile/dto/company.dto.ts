import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { COMPANY_TYPE } from 'src/config';

export class CompanyDto{
  @ApiProperty()
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  public readonly company_name: string; //company_name

  @ApiProperty()
  @MaxLength(55)
  @IsString()
  @IsNotEmpty()
  public readonly catchparse: string; // catchparse

  @ApiProperty()
  @MaxLength(55)
  @IsString()
  @IsNotEmpty()
  public readonly bs: string; // bs

  @ApiProperty()
  @IsEnum(COMPANY_TYPE)
  @IsNotEmpty()
  public readonly company_type: COMPANY_TYPE; // status
}