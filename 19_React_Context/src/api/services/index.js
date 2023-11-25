const BASE_URL = 'https://jsonplaceholder.typicode.com';

class BaseService {
  constructor() {
    this.baseUrl = BASE_URL;
    this.headers = {
      'Content-Type': 'application/json',
    };
  }
}

export { BaseService };
