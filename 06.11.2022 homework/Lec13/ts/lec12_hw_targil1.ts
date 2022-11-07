export class Validators {
  static checkValidAge(age: number) {
    return age >= 0 && age <= 120;
  }

  static checkValidEmail(email: string) {
    const emailPattern = /^\S+@\S+\.\S+$/;
    return email.match(emailPattern) !== null; //email.length >= 5 && email.indexOf("@") != -1;
  }

  static checkValidUserName(username: string) {
    let noDigits = username.match(/[0-9]/) === null;
    return username.length >= 3 && noDigits;
  }
}

const usernameInput = "lea123";
if (Validators.checkValidUserName(usernameInput)) {
  console.log("Hmmm, username looks good");
} else {
  console.log("Hmmm, the username must be a valid");
}
