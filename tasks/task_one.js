const father = 'Eche'
const child = 'Martins'

let  chidsName = (father + child)
// console.log (chidsName)

chidsName = (child + father).toUpperCase();
// console.log (chidsName)
// let result = child + ' ' + father
let result = child.concat('  ', father)
chidsName = result.toUpperCase();
console.log(chidsName)