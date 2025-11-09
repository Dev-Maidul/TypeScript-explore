const student: {
  firstName: string;
  lastName: string;
  readonly university: string; //! (readonly) This is called access modifier
  graduationYear: number;
} = {
    firstName:"Maidul",
    lastName:"Islam",
    university:"China University of Petroleum,Beijing",
    graduationYear:2027
};
console.log(student)
