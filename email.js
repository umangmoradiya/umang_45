
let email=(a)=>
{
    console.log(a.slice(0,a.lastIndexOf(':')))
    console.log(a.substring(a.lastIndexOf(":")));
    console.log(a.substring(a.lastIndexOf(":"),a.lastIndexOf("@")));
    console.log(a.substring(a.lastIndexOf("@"),a.lastIndexOf(".")));
    console.log(a.slice(a.lastIndexOf(".")));

}
email(`"EmailAddress":"Abdul_Stanton2725@supunk.biz"`);
email(`"EmailAddress":"David_Amstead7176@iatim.tech"`);
email(`"EmailAddress":"Owen_Hunter9749@elnee.tech"`);
email(`"EmailAddress":"David_Torres6323@typill.biz"`);
email(`"EmailAddress":"Bryon_Wright8993@eirey.tech"`);
email(`"EmailAddress":"Carl_Griffiths2666@kideod.biz"`);



  

