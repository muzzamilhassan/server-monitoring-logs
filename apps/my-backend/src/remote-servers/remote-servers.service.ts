import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRemoteServerDto } from './dto/create-remote-server.dto';
import { UpdateRemoteServerDto } from './dto/update-remote-server.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { RemoteServer } from './entities/remote-server.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RemoteServersService {
  constructor(
    @InjectRepository(RemoteServer)
    private readonly remoteServerRepository: Repository<RemoteServer>,
  ) {}
  create(createRemoteServerDto: CreateRemoteServerDto, ownerId: string) {
    const remoteServer = this.remoteServerRepository.create({
      ...createRemoteServerDto,
      ownerId,
    });
    return this.remoteServerRepository.save(remoteServer);
  }

  findAll(ownerId?: string) {
    return this.remoteServerRepository.find({ where: { ownerId } });
  }

  async getRemoteServerById(id: string) {
    const remoteServer = await this.remoteServerRepository.findOneBy({ id });
    if (!remoteServer) {
      throw new NotFoundException('Remote server not found');
    }
    return remoteServer;
  }

  findOne(ownerId: string) {
    return this.remoteServerRepository.findOneBy({ ownerId });
  }

  update(id: string, updateRemoteServerDto: UpdateRemoteServerDto) {
    return this.remoteServerRepository.update(id, updateRemoteServerDto);
  }

  remove(id: string) {
    return this.remoteServerRepository.delete(id);
  }
}
