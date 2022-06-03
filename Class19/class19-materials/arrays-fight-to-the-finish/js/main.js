//Create an array of movie titles. Loop through the array and each element to the h2.
let movies = ['Shrek 1', 'Shrek 2', 'Shrek Forever After']
for(let i = 0; i < movies.length; i++){
    document.querySelector('h2').innerText += movies[i]
}


//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let nums = [5,6,6,2,7]
nums.forEach((item, i) => {
    nums[i] += item + 3
})
//Find the average of all the numbers from question three
let sum = 0
nums.forEach((num) => sum += num)
let avg = sum/nums.length