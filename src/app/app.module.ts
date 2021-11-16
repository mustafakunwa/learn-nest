import { Module } from '@nestjs/common';
import { StudentTeacherController } from '../teacher/student.controller';
import { TeacherController } from '../teacher/teacher.controller';
import { StudentController } from '../student/student.controller';

@Module({
  imports: [],
  controllers: [StudentController, StudentTeacherController, TeacherController],
})
export class AppModule {}
