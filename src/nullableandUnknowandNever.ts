//! nullable

const getUser=(user:string | null)=>{
    const result=user? 'user from db': "Show all user";
    // console.log(result);
}

getUser(null);

// ! unknown
 const discountCalculator=(input:unknown)=>{
    if(typeof input==='number'){
        const discountPrice=input *0.1;
        console.log(discountPrice)
    }
    else if(typeof input==='string'){
        const [discountPrice]=input.split(' ');
        console.log(Number(discountPrice)*0.05);
    }
    else console.log("wrong input")
 };

discountCalculator(100);
discountCalculator("100 tk");
discountCalculator(null);

// ! Never
const error=(mess:string) :never => {
 throw new Error(mess);
}
// error('Error.....');