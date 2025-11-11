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