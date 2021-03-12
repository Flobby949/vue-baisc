// this指针

// 在对象中，this指针指向对象本身，通过this可以引用对象的属性和函数
/* class Player {
    // 构造函数
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    // 定义成员函数
    printInfo() {
        console.log(this.name + "--------" + this.age)
    }
}
let player1 = new Player('tom', 20)
player1.printInfo() */

// this存在的一些问题
class Player {
    // 构造函数
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    // 定义成员函数
    printInfo() {
        window.setTimeout(() => {
            console.log(this.name + "--------" + this.age)
        }, 1000);
    }
}

let player1 = new Player('tom', 20)
player1.printInfo()