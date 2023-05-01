function sum(a, b) {
  return a + b;
}
describe("sum", () => {
  it("adds to numbers correctly", () => {
    expect(sum(1, 2)).toEqual(3);
  });
});
