import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RemoteServersService } from './remote-servers.service';
import { CreateRemoteServerDto } from './dto/create-remote-server.dto';
import { UpdateRemoteServerDto } from './dto/update-remote-server.dto';
import { CurrentUser } from 'src/auth/current-user.decorator';
import type{ UserDto } from 'src/users/dto/user.dto';

@Controller('remote-servers')
export class RemoteServersController {
  constructor(private readonly remoteServersService: RemoteServersService) {}

  @Post()
  create(@Body() createRemoteServerDto: CreateRemoteServerDto, @CurrentUser() user: UserDto ) {
    console.log(user)
    return this.remoteServersService.create(createRemoteServerDto);
  }

  @Get()
  findAll() {
    return this.remoteServersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.remoteServersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRemoteServerDto: UpdateRemoteServerDto) {
    return this.remoteServersService.update(+id, updateRemoteServerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.remoteServersService.remove(+id);
  }
}
