alert('函式twoSum(nums, target)中，參數nums是一個陣列，target則為數字')
function twoSum(nums, target) {
    if (Array.isArray(nums) && typeof target === 'number') {
        for (let i=0; i<nums.length-1; i++) {
            for (let j=1; j<nums.length; j++) {
                if (nums[i]+nums[j] === target && nums[i] !== nums[j]) {
                    return [i, j]
                }
            }
        }
    } else {
        return 'Error: 請確認輸入的參數資料型別是否正確！'
    }
}

console.log(twoSum([2, 7, 11, 15], 9)) //[0, 1] 
console.log(twoSum([2, 7, 11, 15], 26)) //[2, 3] 
console.log(twoSum([3, 7, 13, 18, 50, 67], 70)) //[0, 5] 
console.log(twoSum(true, 12)) //error
console.log(twoSum([3, 5, 12],'Hello, World!')) //error