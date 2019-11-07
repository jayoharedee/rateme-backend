import { TypeOrmModuleOptions } from '@nestjs/typeorm'

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'postgres',
  port: 5432,
  username: '',
  password: 'changeme',
  database: 'feedback',
  entities: [__dirname + '../**/*.entity.ts'],
  synchronize: true,
}