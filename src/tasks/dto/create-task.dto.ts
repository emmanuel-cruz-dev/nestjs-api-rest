import { IsBoolean, IsString, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty()
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  title: string;

  @ApiProperty()
  @IsString()
  @MinLength(10)
  @MaxLength(255)
  description: string;

  @ApiProperty()
  @IsBoolean()
  status: boolean;
}
