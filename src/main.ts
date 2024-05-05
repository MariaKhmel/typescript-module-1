import "./style.css";
// src/main.ts

function add(num1: number, num2: number) {
  return num1 + num2;
}

// console.log(add(1, 2));

enum Role {
  ADMIN,
  USER,
}

const person = {
  role: Role.ADMIN,
};

if (person.role === Role.ADMIN) {
  // console.log("Role: ", Role.ADMIN);
}

enum Test {
  A = 1,
  B = 2,
}

for (let item in Test) {
  console.log(item);
}

function greet() {
  return "Hello, world!";
}

let result: string = greet();

console.log(result);

type User = {
  id: string;
  name: string;
  email: string;
};

type Users = {
  [id: string]: User;
};

let users: Users = {};

let user: User = {
  id: "1",
  name: "Alex",
  email: "alex@example.com",
};

users[user.id] = user;

console.log((users[user.id] = user));
