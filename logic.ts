/**
 * 
 * @param a first number
 * @param b second number
 * @returns Adds the two numbers together and returns the sum
 */
function addition(a:number, b:number) {
    const sum = a + b
    return sum
}

/**
 * 
 * @param a first number
 * @param b second number
 * @returns Subtracts the first number from the second and returns the difference
 */
function subtract(a:number, b:number) {
    const difference = a - b
    return difference
}


/**
 * 
 * @param a first number
 * @param b second number
 * @returns Multiplies the two numbers together and returns the product of the two
 */
function multiply (a:number, b:number) {
    const product = a * b
    return product
}

/**
 * 
 * @param a first number
 * @param b second number
 * @returns Divides the first number by the second number and returns the quotient
 */
function divide (a:number, b:number) {
    const quotient = a / b
    return quotient
}


/**
 * 
 * @param a First number
 * @param operator Operator being used
 * @param b Second number
 * @returns Takes the operator being used, and calls the appropriate function. 
 */
function operate(a:number, operator: any, b:number) {

    if (operator == "+") {
        return addition(a, b)
    } else if (operator == "-") {
        return subtract(a, b) 
    } else if (operator == "*") {
        return multiply(a, b)
    } else {
        return divide(a, b)
    }
}