// ! object and array destructing
 const user={
    id:123,
    name:{
        firstName:"Maidu",
        lastName:"Islam"
    },
    gender:"Male",
    color:"White"
 }
 const {id,name:{firstName}, gender,color}=user;
//  console.log(id);
 console.log(firstName)
 console.log(gender)
 console.log(color)