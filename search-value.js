var arr = [4, 5, 2, 66, 24, 65, 43, 22, 41, 55, 18]
var find = 43
var isFound = false

for (i = 0; i < arr.length; i++) {
    if (arr[i] === find) {
        console.log('Data found at index ' + i)
        isFound = true
        break;
    }
}

if (!isFound) {
    console.log('Data Not Found')
}