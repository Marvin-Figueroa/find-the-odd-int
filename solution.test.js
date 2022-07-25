const solution = require("./solution");

describe("");
test("it should return the element when the input array has only one element", () => {
  const result = solution([1]);
  expect(result).toBe(1);
});

test("it should return the element that appears an odd number of times", () => {
  const result = solution([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]);

  expect(result).toBe(4);
});
