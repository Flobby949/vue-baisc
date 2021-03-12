// es5定义对象,源型链

// 定义对象,成员属性
console.log('------ES5------')
function Player(name,age) {
    this.name = name
    this.age = age
}

// 成员函数挂载对象的源型链
Player.prototype.printInfo = function() {
    console.log(this.name + "--------" + this.age)
}

var player1 = new Player('tom', 20)
var player2 = new Player('jack', 23)

player1.printInfo()
player2.printInfo()


// es6
console.log('')
console.log('------ES6------')
class PlayerEs6 {
    // 构造函数
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    // 定义成员函数
    printInfoEs6() {
        console.log(this.name + "--------" + this.age)
    }
}

let player3 = new PlayerEs6('tom', 20)
player3.printInfoEs6()
console.log('-------重定义------')
const player4 = new PlayerEs6('jack', 20)
player4.printInfoEs6()
// player4 = new PlayerEs6('jack', 20)          // typeError不能给常量赋值
player4.name = 'jackson'                        // 可以给const定义的对象中属性赋值
player4.printInfoEs6()

console.log('')
console.log('--------继承----------')
class BestPlayer extends PlayerEs6 {
    constructor() {
        super()
        this.name = 'jsckson'
        this.age = 25
    }
}

let bestPlayer = new BestPlayer()
bestPlayer.printInfoEs6()


console.log('')
console.log('------对象简写------')
// es5
console.log('------es5------')
let playName = 'jerry'
let playAge = 33
let play = {
    playName: playName,
    playAge: playAge,
    printInfomation: function() {
        console.log(play)
    }
}
play.printInfomation()

console.log('------es6------')
let playName6 = 'jerry'
let playAge6 = 33
let play6 = {
    playName6,
    playAge6,
    printInfomation6() {
        console.log(play)
    }
}
play6.printInfomation6()