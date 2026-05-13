import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@Module({
  controllers: [AuthController],
  providers: [AuthService,{
    provide: 'AUTH_GUARD', // This is a token that can be used to inject the guard elsewhere in the application
    useClass: AuthGuard // This tells NestJS to use the AuthGuard class whenever the 'AUTH_GUARD' token is injected
  }]
})
export class AuthModule {}
