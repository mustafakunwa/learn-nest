import { Controller, Get, Param } from '@nestjs/common';

@Controller('teachers')
export class TeacherController {
  @Get()
  getTeachers() {
    return 'All Teachers';
  }

  @Get('/:teacherId')
  getTeacherById(@Param('teacherId') teacherId: string) {
    return `Teacher ${teacherId}`;
  }
}
