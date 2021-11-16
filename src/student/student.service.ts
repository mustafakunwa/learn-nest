import { Injectable } from '@nestjs/common';
import {
  CreateStudentDto,
  FindStudentsResponseDto,
  StudentsResponseDto,
  UpdateStudentDto,
} from './dto/student.dto';
import { students } from '../db';
import { v4 as uuid } from 'uuid';

@Injectable()
export class StudentService {
  private students = students;
  getAllStudents(): FindStudentsResponseDto[] {
    return this.students;
  }

  getStudentById(studentId): FindStudentsResponseDto {
    const student = this.students.find((std) => std.id == studentId);
    return student;
  }

  createStudent(payload: CreateStudentDto): StudentsResponseDto {
    const newStudent: StudentsResponseDto = {
      ...payload,
      id: uuid(),
    };
    this.students.push(newStudent);
    return newStudent;
  }

  updateStudent(
    studentId: string,
    payload: UpdateStudentDto,
  ): StudentsResponseDto {
    let updatedStudent: StudentsResponseDto;
    const updatedStudentList = this.students.map((student) => {
      if (student.id === studentId) {
        updatedStudent = {
          id: studentId,
          ...payload,
        };
        return updatedStudent;
      }
      return student;
    });

    this.students = updatedStudentList;

    return updatedStudent;
  }

  getStudentByTeacher(teacherId: string): FindStudentsResponseDto[] {
    const _students = this.students.filter(
      (student) => student.teacher === teacherId,
    );
    return _students;
  }

  updateStudentTeacher(
    teacherId: string,
    studentId: string,
  ): StudentsResponseDto {
    let updatedStudent: StudentsResponseDto;
    const updatedStudentList = this.students.map((student) => {
      if (student.id === studentId) {
        updatedStudent = {
          ...student,
          id: studentId,
          teacher: teacherId,
        };
        return updatedStudent;
      }
      return student;
    });

    this.students = updatedStudentList;

    return updatedStudent;
  }
}
