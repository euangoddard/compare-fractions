import { getCommonMultiple, getLowestCommonMultiple } from "./maths";

describe("getLowestCommonMultiple", () => {
  it("should cater for a direct multiple", () => {
    expect(getLowestCommonMultiple(2, 4)).toBe(4);
  });

  it("should cater for a common multiple", () => {
    expect(getLowestCommonMultiple(15, 20)).toBe(60);
  });

  it("should cater for a no multiple", () => {
    expect(getLowestCommonMultiple(7, 9)).toBe(63);
  });
});

describe("getCommonMultiple", () => {
  it("should multiple the two numbers together", () => {
    expect(getCommonMultiple(4, 8)).toBe(32);
  });
});
