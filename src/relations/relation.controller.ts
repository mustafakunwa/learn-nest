import { Controller } from '@nestjs/common';
import { RelationService } from './relation.service';

@Controller()
export class RelationController {
  constructor(private readonly relationService: RelationService) {}
}
