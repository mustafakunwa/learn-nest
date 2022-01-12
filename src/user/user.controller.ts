import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserModel } from './user.model';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAllUsers() {
    return this.userService.getAlluser();
  }

  @Get('/:id')
  getOnById(@Param('id') id: number) {
    return this.userService.getOne(id);
  }

  @Post()
  createUser(@Body() user: UserModel) {
    return this.userService.createUser(user);
  }

  @Patch('/:id')
  Updateuser(@Body() user: UserModel, @Param('id') id: number) {
    return this.userService.updateUser(id, user);
  }

  @Delete('/:id')
  deleteuser(@Param('id') id: number) {
    return this.userService.deleteOne(id);
  }
}
