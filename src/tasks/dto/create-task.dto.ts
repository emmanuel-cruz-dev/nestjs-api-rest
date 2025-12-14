import { IsBoolean, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  title: string;

  @IsString()
  @MinLength(10)
  @MaxLength(255)
  description: string;

  @IsBoolean()
  status: boolean;
}
