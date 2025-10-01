const fiveToOneHundred = () => {
    for (let i = 5; i <= 100; i++) {
        console.log(i)
    }
}
//fiveToOneHundred()


const multiplesOfThree = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            console.log(i)
        }
    }

}
//multiplesOfThree()


const multiplesOfThreeOrFive = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            console.log(i)
        }
    }

}
//multiplesOfThreeOrFive()



const untilNum = (num) => {
    for (i = 1; i <= num; i++) {
        console.log(i)
    }
}
//untilNum(5)


const multiply = (num1, num2) => {
    return num1 * num2
}
//console.log(multiply(4, 7))