import { describe } from "node:test";
import {
  capitalize,
  formatCurrentDate,
  getYesterdaysDate,
  formatDate,
} from "./helpers";

describe("capitalize", () => {
  it("capitalizes a single word", () => {
    const result = capitalize("jerry");

    expect(result).toBe("Jerry");
  });
});

describe("specific time-related stuff", () => {
  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date("2000-01-01T06:00:00Z"));
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  describe("formatCurrentDate", () => {
    it("returns the current date in the format YYYY-MM-DD", () => {
      const result = formatCurrentDate();

      expect(result).toBe("2000-01-01");
    });
  });

  describe("getYesterdaysDate", () => {
    it("returns the date of yesterday in the format YYYYMMDD", () => {
      const result = getYesterdaysDate();

      expect(result).toBe("19991231");
    });
  });
});

describe("formatDate", () => {
  it("formats a date in the format YYYY-MM-DD", () => {
    const result = formatDate("20220101");

    expect(result).toBe("2022-01-01");
  });
});
