var test = ["HTML", 11, "JavaScript", 2, "CSS", 23, 12];
console.log(test);

test.push(-11);
console.log(test);

test.unshift(1000);
console.log(test);

test.push(["Last array element"]);
console.log(test);

test.splice(3, 1);
console.log(test);

test = test.filter(item =>{return  item === +item});
console.log(test);

newtest = test.map(item => Math.pow(item, 2));
console.log(newtest);

var max = newtest[0];
for(i = 0; i < newtest.length; i++){
    if(newtest[i] >= max){
        max = newtest[i];
    }
};
console.log(max);
//let,cost
//+item