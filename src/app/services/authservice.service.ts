import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  uservalidation: {
    username: 'admin',
    password: 'admin',
  };
  constructor() { }

  validateUser(user) {}
}
