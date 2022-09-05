import {
  Controller,
  Get,
  HttpCode,
  Post,
  Req,
  Header,
  Redirect,
  Param,
  Body,
} from '@nestjs/common';

import { CreateUserDto } from './create-user.dto';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    this.usersService.create(createUserDto);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
}

// note
// @Controller('users')
// export class UsersController {
//   //   @Get()
//   //   findAll(@Req() request: Request): string {
//   //     return 'This action return all users';
//   //   }

//   // @Get(), @Post(), @Put(), @Delete(), @Patch(), @Options(), and @Head(). In addition, @All() defines an endpoint that handles all of them.

//   //   @Get()
//   //   findAll(): string {
//   //     return 'This action return all users';
//   //   }

//   // untuk passing parram
//   //   @Get(':id')
//   //   findOne(@Param() params): string {
//   //     console.log(params.id);
//   //     return `This action returns a #${params.id} cat`;
//   //   }

//   // untuk passing parram
//   // @Get(':id')
//   // findOne(@Param('id') id: string): string {
//   //   return `This action returns a #${id} cat`;
//   // }

//   // async await
//   @Get()
//   async findAll(): Promise<any[]> {
//     return ['test'];
//   }

//   // observable

//   // redirect digunakan untuk redirect dengan 2 argument 'url' dan 'statuscode'
//   //   @Get()
//   //   @Redirect('https://nestjs.com', 301)

// //   @Post()
// //   // httpcode dapat digunakan untuk merubah status code defaultnya
// //   //   @HttpCode(204)
// //   @Header('Cache-Control', 'none')
// //   create(): string {
// //     return 'This action return new user';
// //   }

//   @Post()
//   async create(@Body() CreateUserDto: CreateUserDto) {
//     return 'This action adds a new user';
//   }
// }
