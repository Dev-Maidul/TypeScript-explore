// ! ternary operator = ?
// ? nullish coalescing = ??
// $ optional chaining = ?.

// ! ternary operator = ?
const isEligible = (age: number) => {
  //! uses of ternary operator
  age >= 21 ? "You are eligible" : "You are not eligible";
};
// isEligible(20);

// ? nullish coalescing = ?? work only null or undefine value

const userTheme=undefined;
const selectedTheme= userTheme ?? 'Light theme';
console.log(selectedTheme);

// $ optional chaining = ?.
const user :{
    name:string,
    address:{
        city:string,
        region?:string
    }
}={
    name:"Maidul",
    address:{
        city:"Beijing",
    }
}
console.log(user?.address?.region);