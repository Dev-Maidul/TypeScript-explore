//! Mapped types
type AreaOfNum={
    height:string;
    width:string;
}

// type AreaOfString={
//     height:string;
//     width:string;
// }
type Area<T> ={
    [key in keyof T]: T[key];
}