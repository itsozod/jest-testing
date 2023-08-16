const calculator = require("./calculator");

test('should add 2 numbers', () => {
    expect(calculator.add(1, 3)).toBe(4);
})
test('should subtract 2 numbers', () => {
    expect(calculator.subtract(3, 1)).toBe(2);
})
test('should multiply 2 numbers', () => {
    expect(calculator.multiply(2, 2)).toBe(4);
})
test('should divide 2 numbers', () => {
    expect(calculator.divide(4, 2)).toBe(2);
})
test('should throw an error if one the inputs is not number', () => {
    expect(calculator.add(1, '3')).toBe("Add a number!");
})
test('should throw an error if one the inputs is not number', () => {
    expect(calculator.subtract('3', 1)).toBe("Add a number!");
})
test('should throw an error if one the inputs is not number', () => {
    expect(calculator.multiply('3', 2)).toBe("Add a number!");
})
test('should throw an error if one the inputs is not number', () => {
    expect(calculator.divide(4, '2')).toBe("Add a number!");
})