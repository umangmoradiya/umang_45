//empty object
// let u1 = new Object();
// console.log(u1);
// let u2 = new Object(undefined);
// console.log(u2);
// let u3 = new Object(null);
// console.log(u3);

// let car = new Object();
// car.brand="maruti";
// car.color="black";
// car.fueltype="CNG";
// console.log(car);

// let newcar = {
//     brand : `maruti`,
//     color : `black`,
//     fueltype : `cng`
// }
// console.log(newcar)
// newcar[`seat`] = "4"
// console.log(newcar)

// function bike(make,model,year,owner){
//     this.make=make;
//     this.model=model;
//     this.year=year;
//     this.owner=owner;
    
// }
// console.log(bike);


let o = {
    a:7,
    get b(){
        return this.a+1;
    },
    set c(x){
        this.a=x/2;
    }
};
console.log(o);
console.log(o.b);
o.c=50;
console.log(o.a);
console.log(o.b);