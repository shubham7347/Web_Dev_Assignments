class User {
    constructor(username, password) {
      this.username = username;
      this._password = password;
    }
  
    get password() {
      return this._password.replace(/./g, '*');
    }
  
    set password(newPassword) {
      if (newPassword.length >= 8 && /[0-9]/.test(newPassword) && /[A-Z]/.test(newPassword)) {
        this._password = newPassword;
      } else {
        console.error('Invalid password. It must be at least 8 characters long and contain at least one number and one uppercase letter.');
      }
    }
  }
  
  const user = new User('john_doe', 'pass123');
  console.log(user.password); 
  user.password = 'newpassword';
  console.log(user.password); 
  user.password = 'short';
