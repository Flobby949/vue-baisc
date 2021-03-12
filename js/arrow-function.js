// 箭头函数

// 无参非箭头函数
let noParamA = function () {
    return 100
}

// 无参箭头函数
let noParamB = () => 100

// 带参箭头函数
let paramA = (num1, num2) => num1 + num2

// 多行函数
let sumAddA = function (num1, num2) {
    num1 += 1
    num2 += 3
    return num1 + num2
}

let sumAddB = (num1, num2) => {
    num1 += 1
    num2 += 3
    return num1 + num2
}