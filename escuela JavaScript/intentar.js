
const user = [
    {name: 'mao' , lastname:'ordonez', age: 12},
    {name: 'juan' , lastname:'ordonez', age: 22},
    {name: 'luis' , lastname:'ordonez', age: 32},
    {name: 'paola' , lastname:'ordonez', age: 18},
    {name: 'meliza' , lastname:'ordonez', age: 16}
]

//agregar a un array las personas mayores de edad.
const PersonasAdultas = user
    .filter( (user) => user.age >= 18 )
    .map( (user) => user.name)

console.log(PersonasAdultas);

// console.log('\n')
// const personsBigger = [];

// for (let i = 0; i < user.length; i++) {
//     if(user[i].age >= 18 ){
//         personsBigger.push(user[i]);
//     }
// }

// const PersonBiggerName = []
// for (let i = 0; i < personsBigger.length; i++) {
//     PersonBiggerName.push(personsBigger[i].name);
// }
// console.log(PersonBiggerName)