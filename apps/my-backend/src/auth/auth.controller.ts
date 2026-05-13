import { Controller, Get } from '@nestjs/common';
import { CurrentUser } from './current-user.decorator';
import type{ UserDto } from '../users/dto/user.dto';

@Controller('auth')
export class AuthController {
    @Get('me')
    getCurrentUser(@CurrentUser() user: UserDto) {
        return {
            message: 'Current authenticated user',
            user: user,
        };
    }
}
