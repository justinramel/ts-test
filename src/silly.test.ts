import { add } from "./silly";

describe("silly function", () => {
  test("guaranteed random", () => {
    expect(add(1, 1)).toBe(2);
  });
});
