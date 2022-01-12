import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserModel } from './user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  getAlluser() {
    return this.usersRepository.find();
  }

  async getOne(id: number) {
    try {
      const user = await this.usersRepository.findOneOrFail(id);
      return user;
    } catch (err) {
      throw new NotFoundException();
    }
  }

  async createUser(user: UserModel) {
    try {
      const newUser = await this.usersRepository.create(user);
      const savedUser = await this.usersRepository.save(newUser);
      return savedUser;
    } catch (err) {
      if (err?.message) {
        throw new BadRequestException(err.message);
      }
      throw err;
    }
  }

  async updateUser(id: number, user: UserModel) {
    try {
      let userDetail = await this.getOne(id);
      userDetail = { ...userDetail, ...user };
      const savedUser = await this.usersRepository.save(userDetail);
      return savedUser;
    } catch (err) {
      if (err?.message) {
        throw new BadRequestException(err.message);
      }
      throw err;
    }
  }

  async deleteOne(id: number) {
    try {
      const userDetail = await this.getOne(id);
      return await this.usersRepository.remove(userDetail);
    } catch (err) {
      if (err?.message) {
        throw new BadRequestException(err.message);
      }
      throw err;
    }
  }
}
