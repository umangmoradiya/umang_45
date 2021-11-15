let re = /[A-Z]/g
let name1=(a)=>
{
    console.log(a.substring(0,a.lastIndexOf('-')));
    console.log(a.substring(a.lastIndexOf('-'),a.lastIndexOf()));
}
name1("Wilson-Elizabeth Part Time 12000");