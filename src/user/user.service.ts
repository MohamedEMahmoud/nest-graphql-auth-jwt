import { User } from './entities/user.entity';
import { BadRequestException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UserService {

  constructor(@Inject('USER_REPOSITORY') private readonly userRepo: typeof User) { }

  async create(createUserInput: CreateUserInput) {
    const user = await this.findByEmail(createUserInput.email) || createUserInput;

    return this.userRepo.create(user);
  }

  findAll() {
    return this.userRepo.findAll();
  }

  async findByEmail(email: string) {
    const user = await this.userRepo.findOne({ where: { email } });
    if (user) {
      throw new BadRequestException(`User ${user.email} already registered`);
    }
    return null;
  }

  async findOne(id: number) {
    const user = await this.userRepo.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return this.userRepo.update({ ...updateUserInput }, { where: { id } });
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    return await user.destroy();
  }
}
