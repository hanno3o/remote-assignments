function max (numbers) {
    if (numbers.constructor === Array) {
        let maxNum = 0;
        numbers.forEach(num => {
            if (num > maxNum) {
                maxNum = num
            }
        })
        return maxNum
    } else {
        return 'This is not an array'
    }
}


console.log(max([1, 2, 4, 5]))
console.log(max([5, 2, 7, 1, 6]))
console.log(max(12))  