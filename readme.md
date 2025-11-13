//! generic means dynamic types or to make a generalize
type GenericArray<T> =Array<T>;
type GenericRoll=Array<number>;
const friends:GenericArray<string> =["x","y","z"];
const rollNumber:GenericArray<number> = [1,2,3]
const isEligible:GenericArray<boolean> = [true,false,true];

//? Generic with Interface 

interface IDeveloper<T, X = null> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    releasedYear: string;
  };
  smartWatch: T;
  bike?: X;
}

interface IWithoutBrandWatch {
  heartRate: string;
  stopwatch: boolean;
}

interface IBrandWatch{
  heartRate: string;
  stopwatch: boolean;
  AiSupport:boolean;
}
const poorDeveloper: IDeveloper<IWithoutBrandWatch> = {
  name: "Mr poor",
  salary: 2000,
  device: {
    brand: "HP",
    model: "121",
    releasedYear: "1231",
  },
  smartWatch: {
    heartRate: "100",
    stopwatch: false,
  },
};

console.log(poorDeveloper);
const richDeveloper: IDeveloper<IBrandWatch> = {
  name: "Mr rich",
  salary: 2000,
  device: {
    brand: "HP",
    model: "121",
    releasedYear: "1231",
  },
  smartWatch: {
    heartRate: "100",
    stopwatch: false,
    AiSupport:true
  },
  
};
console.log(richDeveloper)

// Generic with function
const createArrayWithGeneric=<T> (value:T)=>{
    return [value];
}

const addStudentToCourse= <T> (studentInfo:T)=>{
    return {
        course:"Next Level",
        ...studentInfo
    }
}

const stu1=addStudentToCourse({
    name:"abdul",
    age:22,
    batch:6
})
console.log(stu1)

const stu2=addStudentToCourse({
    name:"Tom",
    work:"Kom",
    abba:"Jom"
})
console.log(stu2)

//! constrain means some rules have to follow for example here id and name must have to be sent 

const addStudentToCourse= <T extends {name:string,id:number}> (studentInfo:T)=>{
    return {
        course:"Next Level",
        ...studentInfo
    }
}