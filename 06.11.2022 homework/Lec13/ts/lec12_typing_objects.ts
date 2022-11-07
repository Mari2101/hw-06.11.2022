interface PersonType {
  name: string;
  age: number;
}

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  static fromLiteral(p: PersonType) {
    return new Person(p.name, p.age);
  }
}

// let p8 = new Person("abc", 20)
// p8.fromLiteral()

let p = Person.fromLiteral({ name: "dave", age: 20 });

interface UserType {
  email: string;
  id: string;
  age: number;
}

class User {
  email: string;
  id: string;
  age: number;
  constructor(email: string, id: string, age: number) {
    this.email = email;
    this.id = id;
    this.age = age;
  }

  static fromLiteral(u: UserType) {
    return new User(u.email, u.id, u.age);
  }
  toString() {
    return `User: Email: ${this.email}, id: ${this.id}, age: ${this.age}`;
  }
}

const user1: UserType = { id: "123", email: "tomer@gmail.com", age: 20 };

//const user2 = new User(user1.email, user1.id, user1.age)
const user2 = User.fromLiteral(user1);
//user2 = new
