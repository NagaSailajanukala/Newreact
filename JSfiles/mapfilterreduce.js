const person=[
    {fname:"Sailaja",lname:"mnop",age:30},
    {fname:"Pavan",lname:"xyz",age:20},
    {fname:"Sandhya",lname:"abcde",age:50},
    {fname:"Sai",lname:"pqrs",age:20},
]
const output=person.map((x)=>x.fname+" "+x.lname);
console.log(output);
const output1=person.filter((x)=>x.age<30);
console.log(output1);

const output2=person.reduce(function(acc,curr){
    
    // console.log(acc[curr.age]);
    if(acc[curr.age]){
        acc[curr.age]=++acc[curr.age];
    }
    else{
        acc[curr.age]=1;
    }
    return acc;
},{})

console.log(output2);