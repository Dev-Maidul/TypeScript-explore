// ! Union means or |

type IsAdmin= 'admin' | 'user';

const getDashboardAccess=(role:IsAdmin)=>{
    if(role==='admin') return 'Get admin access';
    else if(role==='user') return 'Get user access';
    else return 'Get guest access';
}
getDashboardAccess('admin');

// ! intersection means and (&)

type Employee={
    id:number,
    name:string,
    contact: string
};
type Manager={
    designation:string,
    teamSize:number;
}
type EmployeeManager= Employee & Manager;

const employee1:EmployeeManager={
    id:1234,
    name:"Chowdhuri Shaheb",
    contact:'01xxxxxxx',
    designation:"Manager",
    teamSize:12

}
console.log(employee1)