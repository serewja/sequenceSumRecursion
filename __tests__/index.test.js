import sequenceSum from "../dist/index.js"

test('border cases', () => {
  expect(sequenceSum(7, 2)).toBe(NaN);
  expect(sequenceSum(0, 0)).toBe(0);
  expect(sequenceSum(5, 5)).toBe(5);
});
test('standart cases', () => {
  expect(sequenceSum(1, 5)).toBe(15);
  expect(sequenceSum(4, 10)).toBe(49);
  expect(sequenceSum(-3, 2)).toBe(-3);
})