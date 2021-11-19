import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from '../student/student.module';
import { TeacherModule } from '../teacher/teacher.module';
import config from '../../ormconfig';
@Module({
  imports: [TypeOrmModule.forRoot(config), StudentModule, TeacherModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
