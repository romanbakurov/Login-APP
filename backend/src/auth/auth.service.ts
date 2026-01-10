import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  private readonly users = [
    { id: 1, email: 'test@example.com', password: '123456' },
  ];

  validateUser(email: string, password: string) {
    return this.users.find(
      (user) => user.email === email && user.password === password,
    );
  }

  login(user: { id: number; email: string }) {
    return {
      user: { id: user.id, email: user.email },
      token: 'fake-jwt-token',
    };
  }
}
