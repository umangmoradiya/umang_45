let arr=[];
let email=(a)=>
{
    arr.push(a.slice(0,a.lastIndexOf(':')))
    
    arr.push(a.substring(a.lastIndexOf(":")+2,a.lastIndexOf("@")));
    arr.push(a.substring(a.lastIndexOf("@")+1,a.lastIndexOf(".")));
    arr.push(a.slice(a.lastIndexOf(".")+1,-1));

}
email(`"EmailAddress":"Abdul_Stanton2725@supunk.biz"`);

console.log(arr);
 console.log(arr.pop());
 console.log(arr);
 console.log(arr.length);

 let ar1=[];
// console.log(ar1.pop());

 let myarry="uamng,asish,nirav";
 console.log(myarry);
 let splitarray=myarry.split(",");
 console.log(splitarray);


// //let newarray=arr.join("-");
// //console.log(newarray);

// let newarray=arr.toString();
// console.log(newarray);

 console.log(arr.unshift("skill"));
 console.log(arr);
// console.log(arr.unshift("qode"));
// console.log(arr);

// console.log(arr.shift());
// console.log(arr);


const animals = ['ant', 'bison', 'camel', 'duck', 'elephant','bison'];

console.log(animals.slice(-3,-1));
// expected output: Array ["camel", "duck", "elephant"]

const beasts = ['ant', 'bison', 'camel', 'duck', 'umang'];

console.log(beasts.indexOf('bison'));
console.log(beasts.indexOf('bison'));
// expected output: 1


const months = ['Jan', 'March', 'April', 'June'];
months.splice(0, 2, 'abcd');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]


const a=['u','m','a','n','g'];
const b=['m','o','r','a','d','i','y','a'];
const c=a.concat(b);

console.log(c);


const array1 = [1,2,3,4,5,6];

// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 2));
// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(array1.fill(5, 3));
// expected output: [1, 5, 5, 5]





