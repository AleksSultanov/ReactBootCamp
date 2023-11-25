import { BaseService } from '.';

class UsersService extends BaseService {
  constructor() {
    super();
    this.usersUrl = `${this.baseUrl}/users`;
  }

  async getUsers() {
    try {
      const response = await fetch(this.usersUrl);
      const users = await response.json();

      if (response.status !== 200) {
        throw new Error('Что то с запросом');
      }

      return users;
    } catch (error) {
      return `Ошибка: ${error}`;
    }
  }

  async addUser(user) {
    try {
      const response = await fetch(this.usersUrl, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: this.headers,
      });
      const addedUser = await response.json();

      if (response.status !== 201) {
        throw new Error('Что то с запросом');
      }

      return addedUser;
    } catch (error) {
      return `Ошибка: ${error}`;
    }
  }
}

const usersService = new UsersService();

export { usersService };
