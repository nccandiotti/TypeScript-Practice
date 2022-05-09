"use strict";
exports.__esModule = true;
var id = 5;
var company = "Traversy Media";
var isPublished = true;
var ids = [1, 2, 3, 4, 5];
var arr = [1, true, "Hello"];
// Tuple
var person = [1, "Nicole", true];
var employee;
employee = [
    [1, "Brad"],
    [2, "John"],
    [3, "Jill"],
];
// Union - defining multiple types that are acceptable
var productId;
// Enum (enumerated types) = set of named constants either numeric or string, numberic by default
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Left);
// 2 definte object
var user = {
    id: 1,
    name: "John"
};
// Type assertion - explictely tells the compiler to treat the entity as a different type (2 ways below, either work)
var cid = 1;
// let customerId = <number>cid
var customerId = cid;
// Functions - if function has a type, that's the type of the return value
// if function has no return value, type is "void"
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
var user1 = {
    id: 1,
    name: "John"
};
var add = function (x, y) { return x + y; };
var subtract = function (x, y) { return x - y; };
// Classes - (also available in JS, can also implement an interface with a class) - used to create objects
var Person = /** @class */ (function () {
    // constructor runs when object is instantiated
    function Person(id, name) {
        // console.log(" new object created")
        this.id = id;
        this.name = name;
    }
    return Person;
}());
// this will run the Person Constructor function
var me = new Person(1, "Nicole");
var Jordan = new Person(2, "Jordan");
console.log(me, Jordan);
