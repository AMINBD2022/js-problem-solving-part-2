// js-problems-part2-practice-tasks
// Task -1:
// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];



const heights2 = [167, 190, 120, 165, 137];
let result = 0;
for (num of heights2){
    if (result < num){
        result = num;
    }
}
console.log(result);