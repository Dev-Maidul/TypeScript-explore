// ! There are two types of function 
//  1. Normal function 2. Arrow Function

function normalFunction(num1:number,num2:number):number{
    return num1+num2;
}

const arrowFunction=(num1:number,num2:number):number=> num1+num2;

console.log(normalFunction(2,2));

//! if the function declare in object then it's called method

type account={
    name:string,
    balance:number,
    addBalance(amount:number):number
}
const accountHolder:account={
    name:"Maidul",
    balance:1000,
    addBalance(amount:number){
        const totalBalance=this.balance+amount;
        return totalBalance;
    }
}
console.log(accountHolder);
accountHolder.addBalance(400);
console.log(accountHolder.balance)