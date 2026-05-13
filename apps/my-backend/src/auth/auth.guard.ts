
import {
  CanActivate,
  ExecutionContext,
  Injectable,
} from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {

   canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    request['user'] = {
      id: '123e4567-e89b-12d3-a456-426614174000',
      name: 'John Doe',
      email: 'john.doe@example.com'
    }
    return true;
  }
}
