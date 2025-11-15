class Counter{
    static count:number=0;

    static increament(){
       return Counter.count+=1;
    }

    static decrement(){
       return Counter.count-=1;
    }
}

console.log(Counter.increament());
console.log(Counter.increament());
console.log(Counter.increament());
console.log(Counter.increament());
console.log(Counter.increament());
console.log(Counter.increament());
console.log(Counter.increament());

console.log('now decreasing the value');
console.log(Counter.decrement());
console.log(Counter.decrement());
console.log(Counter.decrement());
console.log(Counter.decrement());