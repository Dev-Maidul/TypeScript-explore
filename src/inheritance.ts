class Person{
    name:string;
    age:number;
    address:string;

    constructor(name:string,age:number, address:string)
    {
        this.name=name;
        this.age=age;
        this.address=address;
    }

    getSleep(hours:number){
        console.log(`${this.name} sleep ${hours} hours`)
    }
};

class Student extends Person{
    id:number;

    constructor(name:string, age:number, address:string,id:number){
        super(name,age,address);
        this.id=id;
    }
}

const student1= new Student("Maidul",22,"Beijing",2232);
console.log(student1);

class Teacher extends Person{
    designation:string;
    constructor(name:string,age:number,address:string,designation:string){
        super(name,age,address);
        this.designation=designation;
    }
}

const teacher1=new Teacher("nabil",222,"bd","Head");
console.log(teacher1)