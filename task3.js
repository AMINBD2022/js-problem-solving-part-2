
// Task-3:
// Your task is to calculate the total budget required to buy electronics:

//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

function calculateElectronicsBudget(laptop , tablets, mobile){
    let laptopPrice = 35000;
    let tabletsPrce = 15000;
    let mobilePrice = 20000;
    let totals = (laptopPrice * laptop) + (tabletsPrce * tablets) + ( mobilePrice * mobile);
    return totals;
}


let results = calculateElectronicsBudget (11 , 4, 9)
console.log(results);
