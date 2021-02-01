let array = [1, 4, 2, 3, 5]
sumOfIntegerOnTop2(array)

function sumOfIntegerOnTop2(array) {
    let result = 0
    for(let item of array) {
        if(item > 2) {
            result += item
        } else {
            result -= item
        }
    }
    return console.log(result)
}