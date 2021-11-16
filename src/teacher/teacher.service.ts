import { Injectable } from '@nestjs/common';
import { teachers } from '../db';
import { FindTeacherResponseDto } from './dto/teacher.dto';

@Injectable()
export class TeacherService {
  private teachers = teachers;

  getTeachers(): FindTeacherResponseDto[] {
    return this.teachers;
  }

  getTeacherById(teacherId: string): FindTeacherResponseDto {
    const teacher = this.teachers.find((tech) => tech.id === teacherId);
    return teacher;
  }
}
