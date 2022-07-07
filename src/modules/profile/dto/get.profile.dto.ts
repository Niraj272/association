import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class GetProfileDto{
    @ApiProperty()
    @IsNotEmpty()
    public readonly id: string;
} 