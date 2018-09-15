import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class RoleBaseService {
  private rolesubject = new BehaviorSubject<string>('college');
  role = this.rolesubject.asObservable();

  constructor() { }

  setRole(newRole) {
    this.rolesubject.next(newRole);
  }

}
