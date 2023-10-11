// src/app/user.model.ts
import { User } from './user.interface';

export class UserModel implements User {
  constructor(
    public name: string,
    public email: string,
    public age: number
  ) {}
}
