//! spread operator

const friends=["jobbar","poyzar","zeleka"];

const schoolFriend=["sattar",'khoddu',"onjon"];
const collegeFreind=["toklu","mintu","zhontu"];

friends.push(...schoolFriend);
friends.push(...collegeFreind);
// console.log(friends);

const user={
    name:"maidul",
    phone:"01223333"
}
const extraInfo={
    email:"Maidulislammanik@gmail.com",
    isValid:false
}
const userInfo={...user,...extraInfo};
console.log(userInfo);

// ! Rest Operator

const sentInvitation=(...friend:string[])=>{
friend.forEach((friend:string)=> console.log(`Sent invitation to ${friend}`));
}
sentInvitation("kuddus","jobbar","tera monsur");
