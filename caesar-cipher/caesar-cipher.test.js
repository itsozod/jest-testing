const caesarCipher = require('./caesar-cipher');

test('if input is not a string', () => {
    expect(caesarCipher(1)).toBe('Must be a string');
})

test('for letters with charCode from 65(A) to 77(M) add 13 times, for example (A will be N) 13 times +', () => {
    expect(caesarCipher("A")).toBe("N");
})
test('for letters with charCode from 78(N) to 90(Z) subtract 13 times, for example (N will be A) 13 times minus ', () => {
    expect(caesarCipher("N")).toBe("A");
})