import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { Feedback } from 'src/feedback/feedback.entity'

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: '127.0.0.1',
  port: 5432,
  username: 'postgres',
  password: 'changeme',
  database: 'feedback',
  entities: [Feedback] ,
  synchronize: false,
}
