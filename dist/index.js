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
// Union
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
    Direction2[Direction2["Up"] = 0] = "Up";
    Direction2[Direction2["Down"] = 1] = "Down";
    Direction2[Direction2["Left"] = 2] = "Left";
    Direction2[Direction2["Right"] = 3] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Left);
