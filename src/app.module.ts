import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { envConfig } from './config/env';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: envConfig.databaseUrl,
      database: envConfig.database,
      autoLoadEntities: true,
      synchronize: true,
      entities:[]
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
