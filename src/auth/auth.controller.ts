import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dt';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern('create-user')
  registerUser(@Payload() createUserDto: CreateUserDto) {
    return this.authService.createUser(createUserDto);
  }

  @MessagePattern('login-user')
  loginUser(@Payload() loginUser: LoginUserDto) {
    return this.authService.loginUser(loginUser);
  }
}
