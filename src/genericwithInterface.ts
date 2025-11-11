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