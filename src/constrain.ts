//! constrain means some rules have to follow for example here id and name must have to be sent 

const addStudentToCourse= <T extends {name:string,id:number}> (studentInfo:T)=>{
    return {
        course:"Next Level",
        ...studentInfo
    }
}