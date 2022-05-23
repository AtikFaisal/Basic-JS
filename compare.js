var obj1 = {
    x: 25,
    y: 15
}

var obj2 = {
    x: 25,
    y: 15
}

// if (obj1.x === obj2.x && obj1.y === obj2.y) {
//     console.log(true)
// } else {
//     console.log(false)
// }

console.log(JSON.stringify(obj1) === JSON.stringify(obj2))