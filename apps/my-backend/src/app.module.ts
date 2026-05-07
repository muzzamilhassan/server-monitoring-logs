import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'muzzamilhassan',
  database: 'test',
  autoLoadEntities: true,
  synchronize: true, // Note: set to false in production // synchronize: true will automatically create database tables based on your entities. This is convenient for development but can lead to data loss in production if not used carefully. Always set synchronize to false in production and use migrations to manage database schema changes.
}), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
   