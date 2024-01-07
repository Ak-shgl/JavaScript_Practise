function print(...num){
    console.log(num);
}

print(1);
print(1,2,3,4,5,6);
print(10,20,30,40,40,50,60,70,80,90,100);


function sum(...num){
    const sum=num.reduce((acc,val) =>acc+val);
    return sum;
}
console.log(sum(1,2,3,4));
console.log(sum(22,33,44));