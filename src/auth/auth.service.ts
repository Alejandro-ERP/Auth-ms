import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dt';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthEntity } from './entity/auth.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(AuthEntity)
    private readonly authRepository: Repository<AuthEntity>,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    return await this.authRepository.save(createUserDto);
  }

  loginUser(loginUserDto: LoginUserDto) {
    return loginUserDto;
  }
}
