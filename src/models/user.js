export default class User {
  constructor(username,
              email,
              resume,
              fileDB,
              salaries,
              password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
}