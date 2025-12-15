import {
  Controller,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Query,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import type { Request, Response } from 'express';
import { ValidateUserPipe } from './pipes/validate-user/validate-user.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller()
export class HelloController {
  @Get('/')
  index(@Req() request: Request, @Res() response: Response) {
    response.status(200).json({ message: 'Hello World! 👋' });
  }

  @Get('not-found')
  @HttpCode(404)
  notFoundPage() {
    return '404 Not found';
  }

  @Get('error')
  @HttpCode(500)
  errorPage() {
    return 'Error Route';
  }

  @Get('ticket/:num')
  getNumber(@Param('num', ParseIntPipe) num: number) {
    return num + 14;
  }

  @Get('greet')
  @UseGuards(AuthGuard)
  greet(@Query(ValidateUserPipe) query: { name: string; age: number }) {
    return `Hello ${query.name}, you are ${query.age} years old`;
  }
}
