
import { 
    createParamDecorator, // This function is used to create a custom parameter decorator in NestJS. It takes a factory function as an argument, which will be called to resolve the value of the parameter when the decorated parameter is accessed in a controller method.
    ExecutionContext, // This is an interface that provides methods to access the details of the current execution context, such as the request and response objects. It is passed to the factory function of the custom parameter decorator, allowing you to access the request object and extract the user information from it.
 } from '@nestjs/common';
import { UserDto } from '../users/dto/user.dto';

export const CurrentUser = createParamDecorator<UserDto>(
    (data: unknown, ctx: ExecutionContext): UserDto => {
        const request = ctx.switchToHttp().getRequest();
        return request.user;
    },
);
