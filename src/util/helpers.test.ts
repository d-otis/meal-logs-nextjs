import { capitalize } from "./helpers";

describe("capitalize", () => {
  it("capitalizes a single word", () => {
    const result = capitalize("jerry");

    expect(result).toBe("Jerry");
  });
});
