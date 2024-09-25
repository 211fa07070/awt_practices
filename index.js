// const car = {
//     name: "mustang",
//     price: "20000000",
//     name: "benz"
// }
// car.name = "volkswagen"
// console.log(car["name"])
// console.log(car.price)
// console.log(car)
// console.log(Object.keys(car))
// console.log(Object.entries(car))

// // ctrl + / gives comments
// // Object.keys(obj) returns the keys of any object

// const arr = ["saketh", 70]
// arr[1] = 7070
// console.log(arr[1])
// console.log(arr.length)
// arr.push(20)
// console.log(arr)
// console.log(arr.length)

// function greet() {
//     console.log("hello")
// }

// greet()

// function arith(a, b) {
//     console.log(a + b)
//     console.log(a - b)
//     console.log(a * b)
//     console.log(a / b)
//     console.log(a % b)
// }
// var a = prompt("Enter First Number")
// var b = prompt("Enter Second Number")
// arith(a, b)

// // fn + f12 to execute in browser terminal

function Solve(val) {
    var v = document.getElementById('res');
    v.value += val;
}
function Result() {
    var num1 = document.getElementById('res').value;
    try {
        var num2 = eval(num1.replace('x', '*'));
        document.getElementById('res').value = num2;
    } catch {
        document.getElementById('res').value = 'Error';
    }
}
function Clear() {
    var inp = document.getElementById('res');
    inp.value = '';
}
function Back() {
    var ev = document.getElementById('res');
    ev.value = ev.value.slice(0, -1);
}
document.addEventListener('keydown', function (event) {
    const key = event.key;
    const validKeys = '0123456789+-*/.%';
    if (validKeys.includes(key)) {
        Solve(key === '*' ? 'x' : key);
    } else if (key === 'Enter') {
        Result();
    } else if (key === 'Backspace') {
        Back();
    } else if (key.toLowerCase() === 'c') {
        Clear();
    }
});