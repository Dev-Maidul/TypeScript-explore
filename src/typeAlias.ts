// ! Type Alias is object
type User={
    id:number,
    name:{
        firstName:string,
        lastName:string
    },
    gender: 'male' | 'female',
    address:{
        division:string,
        city:string
    }
}
const user1: User={
    id:123,
    name:{
        firstName:"Maidu",
        lastName:"Islam"
    },
    gender:'male',
    address:{
        division:"Rangpur",
        city:"Kurigram"
    }
};
// console.log(user1)
// ! Type alias in function
type AddFunction= (num1:number, num2:number)=> number;

const add:AddFunction=(num1,num2)=>num1+num2;
