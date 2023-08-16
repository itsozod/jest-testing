const reverseString = require("./reverse-string");

  test("should return nothing on empty strings", () => {
    expect(reverseString("")).toEqual("");
  });

  test("should reverse", () => {
    expect(reverseString("ozod")).toEqual("dozo");
  });
