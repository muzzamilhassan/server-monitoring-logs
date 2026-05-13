import { Controller, Get, UseGuards } from '@nestjs/common';
import { CurrentUser } from './current-user.decorator';
import { AuthGuard } from './auth.guard';
import type{ UserDto } from '../users/dto/user.dto';

@Controller('auth')
export class AuthController {
    @Get('me')
    @UseGuards(AuthGuard)
    getCurrentUser(@CurrentUser() user: UserDto) {
        return {
            message: 'Current authenticated user',
            user: user,
        };
    }
}
