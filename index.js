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




const add = (num1, num2) => {
    let sum = num1 + num2

    if (num1 === num2) {
        return sum * 3
    } else {
        return sum
    }
}
//console.log(add(2, 3))


const isNegative = (num) => {
    if (num < 0) {
        return true
    } else {
        return false
    }
}
//console.log(isNegative(0))



const triangleArea = (height, base) => {
    return height * base / 2
}
//console.log(triangleArea(3, 4))


const betweenTwentyAndFourty = (num) => {
    if (num > 20 && num < 40) {
        return true
    } else {
        return false
    }
}
//console.log(betweenTwentyAndFourty(30))




const largest = (num1, num2, num3) => {
    let most = num1
    for (let i = 0; i <= 3; i++) {
        if (most < num2) {
            most = num2
        } else if (most < num3) {
            most = num3
        }

    }
    return most
}
//console.log(largest(50, 51, 52))


const printTime = () => {
    const any = new Date()
    let time = any.toLocaleTimeString()
    console.log(time)
}
//printTime()


const isLeapYear = (year) => {
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        console.log(true)
    } else {
        console.log(false)
    }
}
//isLeapYear(2024)


const getExtention = (fileName = " ") => {
    for (let i = fileName.length - 1; i >= 0; i--) {
        if (fileName[i] === ".") {
            console.log(fileName.slice(i));
        }
    }
    console.log();
}
getExtention("Dog.png")


const absoluteNineteen = (num) => {
    let total = Math.abs(num - 19)
    if (num < 19) {
        return total
    } else {
        return total * 3
    }
}
//console.log(absoluteNineteen(20))




const switchLetters = (string) => {
    let firstLetter = string[0]
    let lastLetter = string[string.length - 1]
    let middle = ''
    for (let i = 1; i < string.length - 1; i++) { /* gets middle part of word */
        let char = string[i]
        middle += char
    }
    return lastLetter + middle + firstLetter

    /* slice -> (h)ell(o)
    console.log(string.slice(1, string.length - 1)) 
    */

}

//console.log(switchLetters('hello'))


const changeString = (word) => {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let newWord = ' '
    for (let i = 0; i < word.length; i++) {
        //finds first letter in given word
        for (let j = 0; j < alphabet.length; j++) {
            if (alphabet[j] === word[i]) /* finds the same letter in alphabet array */ {
                newWord += alphabet[j + 1] /* adds the next letter */

            }

        }
    }
    return (newWord)
    //once everything found then return new word 
}



//console.log(changeString('word'))