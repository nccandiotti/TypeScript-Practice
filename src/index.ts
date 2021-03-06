let id: number = 5
let company: string = "Traversy Media"
let isPublished: boolean = true
let ids: number[] = [1, 2, 3, 4, 5]

let arr: any[] = [1, true, "Hello"]
// Tuple
let person: [number, string, boolean] = [1, "Nicole", true]
let employee: [number, string][]
employee = [
  [1, "Brad"],
  [2, "John"],
  [3, "Jill"],
]

// Union - defining multiple types that are acceptable
let productId: string | number

// Enum (enumerated types) = set of named constants either numeric or string, numberic by default

enum Direction1 {
  Up, //value =0
  Down, //value=1
  Left, //value=2
  Right, //value=3
}
enum Direction2 {
  Up = "Up", //value =Up
  Down = "Down", //value=Down
  Left = "Left", //value=Left
  Right = "Right", //value=Right
}
console.log(Direction2.Left)

// Objects
// 1. definte type
type User = {
  id: number
  name: string
}
// 2 definte object
const user: User = {
  id: 1,
  name: "John",
}

// Type assertion - explictely tells the compiler to treat the entity as a different type (2 ways below, either work)
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number

// Functions - if function has a type, that's the type of the return value
// if function has no return value, type is "void"
function addNum(x: number, y: number): number {
  return x + y
}
function log(message: string | number): void {
  console.log(message)
}

// Interfaces - like a custom type, specific structure to an object or function (make sure there's no equal sign)
// ** types can be used with primitives and unions, interfaces can NOT
// ** optional properties, add questionmark after
// ** readonly properties => specify readonly
interface UserInterface {
  readonly id: number
  name: string
  age?: number
}

const user1: UserInterface = {
  id: 1,
  name: "John",
}
// can also use interface with function
interface MathFunc {
  (x: number, y: number): number
}
const add: MathFunc = (x: number, y: number): number => x + y
const subtract: MathFunc = (x: number, y: number): number => x - y

// an interface can also be implemented on a class (see below use implements keyword, add "implements PersonInterface" )
interface PersonInterface {
  id: number
  name: string
  age?: number
  register(): string
}
// Classes - (also available in JS, can also implement an interface with a class) - used to create objects
// Class properties can be public, private, or protected
// Public is the same as leaving it off
// Private means it can only be used within the class
//Protected means you can only use it within this class or any class that is extended from this class

class Person implements PersonInterface {
  id: number
  name: string

  // constructor runs when object is instantiated
  constructor(id: number, name: string) {
    // console.log(" new object created")
    this.id = id
    this.name = name
  }
  register() {
    return `${this.name} is now registered`
  }
}
// this will run the Person Constructor function
const me = new Person(1, "Nicole")
const Jordan = new Person(2, "Jordan")
// console.log(me, Jordan)

// This will run the method register from in the class :
// console.log(me.register())

// can "extend" a class into another class (called a subclass), essentially spreads class properties into new class and you can add additional properties (new class inherits properties of primary class)
// use super keyword to initialize properties from OG class

class Employee extends Person {
  position: string

  constructor(id: number, name: string, position: string) {
    super(id, name)
    this.position = position
  }
}

const newEmployee = new Employee(3, "Joe", "Manager")
console.log(newEmployee.register())

// Generics - used to build reusable components. To implement, put capital T. Then, when calling the function, use angle brackets and put type inside of them, e.g., <number>

function getArray<T>(items: T[]): T[] {
  return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4])
let strArray = getArray<string>(["apple", "pear", "orange", "apple"])
// can add a string to numArray because type for getArray is "any" for both params and return output

export {}
