//! Here is an example of enum. for example if we have fixed value in that cases we will use Enum .
//? For example, traffic light always have 3 values not changed like- Red/Green/Yellow and for e-commerce website like Super-Admin/Admin/Seller/Customer
//! Normally these value are not changed 
// type UserRole= 'admin' | 'editor' | 'viwer';
//!================================================
enum TrafficLight{
    Red,
    Green,
    Yellow
}

let signal:TrafficLight=TrafficLight.Green;
console.log(signal)


// enum UserRole{
//     Admin='Admin',
//     Editor='Editor',
//     Viwer='Viwer'
// }

// const canEdit=(role:UserRole)=>{
//     if(role===UserRole.Admin || role===UserRole.Editor) return true;
//     else return false;
// }

// const ans=canEdit(UserRole.Admin)
// // console.log(ans);

