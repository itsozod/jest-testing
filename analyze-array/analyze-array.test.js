const analyzeArray = require('./analyze-array');

test('take an array and return its average, min, max number and its length', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4, 
        min: 1, 
        max: 8, 
        length: 6,
    }
    );
});
test("won't work if the input is not an array", () => {
    expect(analyzeArray('string')).toEqual("Not an array");
});
test("won't work if the elements in array is not a number", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, "6"])).toEqual("Not an array");
});