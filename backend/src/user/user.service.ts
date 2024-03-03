import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { plainToClass } from 'class-transformer';

@Injectable()
export class UserService {
  stores: User[] = [];

  create(createUserDto: CreateUserDto) {
    const user = plainToClass(User, createUserDto);
    user.id = Date.now();
    
    return user;
  }

  findAll() {
    return this.stores;
  }

  findOne(id: number) {
    return this.stores.find(user => user.id === id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
