class BankAccount{
    readonly userId:number;
    public userName:string;
    private userBalance:number;

    constructor(userId:number, userName:string, userBalance:number){
        this.userId=userId;
        this.userName=userName;
        this.userBalance=userBalance;
    }

    addBalance(balance:number){
        this.userBalance+=balance;
    }
}

const MaidulAccount= new BankAccount(1212,"maidul",120);
console.log(MaidulAccount);
MaidulAccount.addBalance(100);
console.log(MaidulAccount);