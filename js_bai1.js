let array = ['a', 'ab', 'abc', 'cd', 'def', 'gh']
findStringLengthAppearMost(array)

function findStringLengthAppearMost(array) {
    let arrayMap = []
    let obj = {}

    arrayMap = array.map(item => {
        if(!obj[item.length]) {
            obj[item.length] = 1
        } else {
            obj[item.length]++
        }
    })

    let maxAppear = 0
    let maxLength = 0
    for(let i in obj) {
        if(obj[i] > maxAppear) {
            maxAppear = obj[i]
            maxLength = Number(i)
        }
    }
    let result = array.filter(item => maxLength === item.length)

    return console.log(result)
}