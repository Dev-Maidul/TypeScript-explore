//! interface work only object type data
interface IUser{
    name:string;
    age:number;
}
interface IUserWithRole extends IUser{
    role:"admin" | "user";
}

const user1:IUser={
    name:"Mr x",
    age:22
}
const user2:IUserWithRole={
    name:"Mr y",
    age:11,
    role:"admin"
}
// ? function 
interface IAdd{
    (num1:number,num2:number):number;
}
const Add:IAdd=(num1,num2)=> num1+num2;
console.log(Add(2,3));