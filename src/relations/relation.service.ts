import { Injectable } from '@nestjs/common';
import { Employee } from './entities/employee.entity';
import { ContactInfo } from './entities/contact-info.entity';
import { Meeting } from './entities/meeting.entity';
import { Task } from './entities/task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RelationService {
  constructor(
    @InjectRepository(Employee) readonly employeeRepo: Repository<Employee>,
    @InjectRepository(ContactInfo)
    readonly contactInfoRepo: Repository<ContactInfo>,
    @InjectRepository(Meeting) readonly meetingRepo: Repository<Meeting>,
    @InjectRepository(Task) readonly taskRepo: Repository<Task>,
  ) {}
}
