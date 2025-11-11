//! generic means dynamic types or to make a generalize
type GenericArray<T> =Array<T>;
type GenericRoll=Array<number>;
const friends:GenericArray<string> =["x","y","z"];
const rollNumber:GenericArray<number> = [1,2,3]
const isEligible:GenericArray<boolean> = [true,false,true];
