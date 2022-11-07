"use strict";
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    static fromLiteral(p) {
        return new Person(p.name, p.age);
    }
}
// let p8 = new Person("abc", 20)
// p8.fromLiteral()
let p = Person.fromLiteral({ name: "dave", age: 20 });
class User {
    email;
    id;
    age;
    constructor(email, id, age) {
        this.email = email;
        this.id = id;
        this.age = age;
    }
    static fromLiteral(u) {
        return new User(u.email, u.id, u.age);
    }
    toString() {
        return `User: Email: ${this.email}, id: ${this.id}, age: ${this.age}`;
    }
}
const user1 = { id: "123", email: "tomer@gmail.com", age: 20 };
//const user2 = new User(user1.email, user1.id, user1.age)
const user2 = User.fromLiteral(user1);
//user2 = new
