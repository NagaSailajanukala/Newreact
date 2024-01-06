const radius=[5,3,4,2];
const area=function(radius){
    return Math.PI*radius*radius;
}
const diameter=function(radius){
    return 2*radius;
}
const circumference=function(radius){
    return 2*Math.PI*radius;
}
// const calculate=function(radius,logic){
//     const output=[];
//     for(let i=0;i<radius.length;i++){
//     output.push(logic(radius[i]))
// }
// return output;
// }

Array.prototype.calculate=function(logic){
        const output=[];
        for(let i=0;i<radius.length;i++){
        output.push(logic(radius[i]))
    }
    return output;
    }
console.log(radius.map(area));
console.log(calculate(radius,area));
console.log(radius.calculate(area));
// console.log(calculate(radius,diameter));
// console.log(calculate(radius,circumference));
