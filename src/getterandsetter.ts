class UserBankAccount{
    userId:number;
    userName:string;
    userBalance:number;

    constructor(userId:number, userName:string, userBalance:number){
        this.userId=userId;
        this.userName=userName;
        this.userBalance=userBalance;
    }

    set addBalance(amount:number){
        this.userBalance+=amount;
    }
    get getBalance(){
        return this.userBalance;
    }
}

const maidulAccount= new UserBankAccount(1111,"islam",120);
console.log(maidulAccount);
maidulAccount.addBalance=20;
console.log(maidulAccount.getBalance);