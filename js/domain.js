// 作用域学习
if (true) {
    var externalVal = 'externalVal'
}

function domainTest() {
    var funVal = 'funVal'
    console.log(externalVal + '----------' + funVal)
}

domainTest()

if (true) {
    console.log(externalVal)
    console.log(funVal)
}

const a = 50
// a = 100     // const定义的变量不能二次赋值
// const b     // const声明的变量必须要初始值
let b