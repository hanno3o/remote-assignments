function calculate (arg) {
    const num1 = Object.values(arg)[0]
    const num2 = Object.values(arg)[1]
    const operator = Object.values(arg)[2]
    let result
    if (operator === '+'){
        result = num1 + num2
    } else if (operator === '-') {
        if (num1 > num2) {
            result = num1 - num2
        } else if (num1 < num2) {
            result = num2 - num1
        } else {
            result = 0
        }
    } else {
        return 'Not supported'
    }
    return result
} 


console.log(calculate({n1: 2, n2: 3, op: '+'}))
console.log(calculate({n1: 5, n2: 2, op: '-'}))
console.log(calculate({n1: 1, n2: 6, op: 'x'}))