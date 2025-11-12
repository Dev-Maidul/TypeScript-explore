type A=null;
type B=undefined;

type C= A extends null ? true: B extends undefined ? true: false;

type RichPeopleVechile={
    bike:string;
    car:string;
    ship:string
}

type CheckVechile<T>= T extends keyof RichPeopleVechile ? true: false;

type HasBike=CheckVechile<"ship">