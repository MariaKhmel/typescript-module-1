enum Load {
  LOADING,
  READY,
}

// const page = {
//   load: Load.READY;
// }

// let union: string | number;
// let titeral: "enable" | "disable";

// function showMessage(message: string): void {
//   console.log(message);
// }

// function calc(num1: number, num2: number): number {
//   return num1 + num2;
// }

// function customError(): never {
//   throw new Error("Error");
// }

// type Page = {
//   title: string;
//   likes: number;
//   accounts: string[];
//   status: "open" | "close";
//   details?: { createAt: Date; updateAt: Date };
// };
// const page1 = {
//   title: "The awesome page",
//   likes: 100,
//   accounts: ["Max", "Anton", "Nikita"],
//   status: "open",
//   details: {
//     createAt: new Date("2021-01-01"),
//     updateAt: new Date("2021-05-01"),
//   },
// };

// const page2 = {
//   title: "Python or Js",
//   likes: 5,
//   accounts: ["Alex"],
//   status: "close",
// };
// Давайте построим дом.

// Создайте абстрактный класс House в нем должны быть следующая логика

// свойство door, она может быть либо закрыта, либо открыта.
// свойство key - объект класса Key.
// конструктор принимает аргумент класса Key и сохраняет его в свойство key.
// метод comeIn, который добавляет объект класса Person в свойство tenants и это срабатывает только если door открыта.
// абстрактный метод openDoor принимает аргумент класса Key
// Создайте класс MyHouse который реализует класс House

// создаем метод openDoor, так как он принимает ключ, сверяем сохраненный ключ в свойстве key равен ли он ключу из аргумента, если да, открываем дверь.
// Создайте объект Key

// есть только свойство signature
// во время создания объекта генерирует случайное число и сохраняет его в signature
// метод getSignature возвращает случайное число из signature
// Создайте объект Person

// конструктор принимает ключ класса Key и сохраняет его в свойство key
// метод getKey возвращает key
// Сделайте так, чтобы жилец попал домой.

// class Key {
//   private signature: number;

//   constructor() {
//     this.signature = Math.random();
//   }

//   getSignature(): number {
//     return this.signature;
//   }
// }

// class Person {
//   constructor(private key: Key) {}
//   getKey(): Key {
//     return this.key;
//   }
// }

// abstract class House {
//   protected door = false;
//   private tenants: Person[] = [];
//   constructor(protected key: Key) {}

//   comeIn(person: Person): void {
//     if (!this.door) {
//       throw new Error("Door is close");
//     }

//     this.tenants.push(person);
//     console.log("Person inside");
//   }

//   abstract openDoor(key: Key): boolean;
// }

// class MyHouse extends House {
//   openDoor(key: Key) {
//     if (key.getSignature() !== this.key.getSignature()) {
//       throw new Error("Key to another door");
//     }

//     return (this.door = true);
//   }
// }

// const key = new Key();

// const house = new MyHouse(key);
// const person = new Person(key);

// house.openDoor(person.getKey());

// house.comeIn(person);

// console.log(Boolean(" "));
// function getPromise(): Promise<Array<string | number>> {
//   return new Promise((resolve) => {
//     resolve(["Text", 50]);
//   });
// }

// getPromise().then((data) => {
//   console.log(data);
// });
// type AllType = {
//   name: string;
//   position: number;
//   color: string;
//   weight: number;
// };
// function compare(
//   top: Pick<AllType, "name" | "color">,
//   bottom: Pick<AllType, "position" | "weight">
// ): AllType {
//   return {
//     name: top.name,
//     color: top.color,
//     position: bottom.position,
//     weight: bottom.weight,
//   };
// }
// class Component<T> {
//   constructor(public props: T) {}
// }

// interface IProps {
//   title: string;
// }

// class Page extends Component<IProps> {
//   pageInfo() {
//     console.log(this.props.title);
//   }
// }
