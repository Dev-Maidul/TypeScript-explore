//! key of constraint 
type publicVechile={
    car:string;
    bike:string;
    cng:string;
};

type myVechile= keyof publicVechile;