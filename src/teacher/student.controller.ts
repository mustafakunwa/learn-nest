import { Controller, Get, Param, Put } from '@nestjs/common';
import {
  FindStudentsResponseDto,
  StudentsResponseDto,
} from 'src/student/dto/student.dto';
import { StudentService } from '../student/student.service';
@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  constructor(private studentService: StudentService) {}

  @Get()
  getStudents(
    @Param('teacherId') teacherId: string,
  ): FindStudentsResponseDto[] {
    return this.studentService.getStudentByTeacher(teacherId);
  }

  @Put('/:studentId')
  updateStudentTeacher(
    @Param('teacherId') teacherId: string,
    @Param('studentId') studentId: string,
  ): StudentsResponseDto {
    return this.studentService.updateStudentTeacher(teacherId, studentId);
  }
}
