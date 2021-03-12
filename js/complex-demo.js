function add([{ name: name1, age: age1 }, { name: name2, age: age2 }]) {
    console.log(name1)
    console.log(name2)
    return age1 + age2
}

console.log(add([{ name: 'jack', age: 20 }, { name: 'jackson', age: 18 }]))

console.log('')

// let a = 2
// let b = 3
// [a, b] = [b, a]
// console.log(a + '-----' + b)
// console.log('')

// ES6 Map
console.log('********Map********')
let map = new Map()
map.set('item1','aaa')
map.set('item2','bbb')
console.log(map)
console.log('解构')
for(let [key,value] of map) {
    console.log(`${key}------${value}`);
}