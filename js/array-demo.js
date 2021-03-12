let arr = ['apple', 'banana', 'pear']
console.log(arr)

// 数组解构         // 数组拍平、降维
console.log('')
console.log('----数组解构赋值----')
let [item1, item2, item3] = arr         
console.log(item1)

// 嵌套数组解构
console.log('')
console.log('----嵌套数组解构赋值----')
let [item4, [[item5], item6]] = ['aaa', [['bbb'], 'ccc']]
console.log(item4)
console.log(item5)
console.log(item6)

// 非规则模式,嵌套数组解构
console.log('')
console.log('----非规则嵌套数组解构赋值----')
let [item7,[[item8],item9]] = ['aaa',[['bbb','ccc'],['ddd', 'eee']]]
// let [item7,[[item8,item10],item9]] = ['aaa',[['bbb','ccc'],['ddd', 'eee']]]
console.log(item7)
console.log(item8)      // 对应相应位置第一个
// console.log(item10)
console.log(item9)

// ...用法
console.log('')
console.log('----...用法----')
let [item11,...other] = ['aaa','bbb','ccc','ddd']
console.log(item11)
console.log(other)

// 对象解构赋值
console.log('')
console.log('*******对象解构赋值********')
let {age, name} = {name: 'tom', age: 20}
console.log(name + "----" + age)

// 解构成员函数,函数名要对应
console.log('')
console.log('*******成员函数解构赋值********')
let {sqrt, sin, cos} = Math
console.log(sqrt(36))

// 字符串解构
console.log('')
console.log('=========字符串解构赋值==========')
let [a,b,...others] = 'javascript'
console.log(a)
console.log(b)
console.log(others)
console.log(typeof a)
console.log(typeof others)