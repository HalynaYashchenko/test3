let arr=[
    {name:"Vasya",age:12},
    {name:"Lena",age:18},
    {name:"petya",age:67},
    {name:"Asya",age:18},
]
/*let elem=arr.find(item=>item.age===18);
console.log(elem);
let elem2=arr.findIndex(item=>item.age===18);
console.log(elem2);
let elem3=arr.filter(item=>item.age>=18);
console.log(elem3); */
arr.forEach((elem)=>console.log(elem.name+elem.age));