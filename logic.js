"use strict";
/**
 *
 * @param a first number
 * @param b second number
 * @returns Adds the two numbers together and returns the sum
 */
function addition(a, b) {
    const sum = a + b;
    return sum;
}
/**
 *
 * @param a first number
 * @param b second number
 * @returns Subtracts the first number from the second and returns the difference
 */
function subtract(a, b) {
    const difference = a - b;
    return difference;
}
/**
 *
 * @param a first number
 * @param b second number
 * @returns Multiplies the two numbers together and returns the product of the two
 */
function multiply(a, b) {
    const product = a * b;
    return product;
}
/**
 *
 * @param a first number
 * @param b second number
 * @returns Divides the first number by the second number and returns the quotient
 */
function divide(a, b) {
    const quotient = a / b;
    return quotient;
}
/**
 *
 * @param a First number
 * @param operator Operator being used
 * @param b Second number
 * @returns Takes the operator being used, and calls the appropriate function.
 */
function operate(a, operator, b) {
    if (operator == "+") {
        return addition(a, b);
    }
    else if (operator == "-") {
        return subtract(a, b);
    }
    else if (operator == "*") {
        return multiply(a, b);
    }
    else {
        return divide(a, b);
    }
}