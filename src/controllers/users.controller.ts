import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {

  @Get()
  getUsers(): object {

    return {
      users: [
        {id: 1, name: 'Juancho'},
        {id: 2, name: 'Pepito'},
      ]
    }
  }
}
