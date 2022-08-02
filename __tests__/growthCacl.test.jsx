import renderer from "react-test-renderer";
import {
  GrowthCompound,
  GrowthStartToEnd,
  GrowthYY,
  GrowthAverage,
} from "../util/growthCalc";
import GrowthCalc from "../components/growthCalc";

it("component matching to snapshot", () => {
  const component = renderer.create(<GrowthCalc />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

const arr1 = [10, 20, 40, 80, 160, 320];
const arr2 = [-100, -50, -25, -12.5];
const arr3 = [10, 12.5, 15.625];
test("compound growth rate should be calculated correctly on arrays of both, positive, and of negative numbers", () => {
  expect(GrowthCompound(0, 0, 0)).not.toBe(0); // should be NaN or send warning message
  expect(GrowthCompound(1, 1, 5)).toBe(0);
  expect(GrowthCompound(arr1[0], arr1[arr1.length - 1], arr1.length - 1)).toBe(
    100
  );
  expect(GrowthCompound(arr2[0], arr2[arr2.length - 1], arr2.length - 1)).toBe(
    50
  );
  expect(GrowthCompound(arr3[0], arr3[arr3.length - 1], arr3.length - 1)).toBe(
    25
  );
});

test("'Beginning to End' growth rate should be calculated correctly on arrays of both, positive, and of negative numbers", () => {
  expect(GrowthStartToEnd(0, 0)).not.toBe(0); // should be NaN or send warning message
  expect(GrowthStartToEnd(1, 1)).toBe(0);
  expect(GrowthStartToEnd(arr1[0], arr1[arr1.length - 1])).toBe(3100);
  expect(GrowthStartToEnd(arr2[0], arr2[arr2.length - 1])).toBe(87.5);
  expect(GrowthStartToEnd(arr3[0], arr3[arr3.length - 1])).toBe(56.25);
});

test("'Year to Year' growth rates should be calculated correctly for different values and presented in an array", () => {
  expect(GrowthYY([0, 0, 0])).not.toBe(0); // should be NaN or send warning message
  expect(GrowthYY([1, 1, 1])).toStrictEqual([0, 0]);
  expect(GrowthYY(arr2)).toStrictEqual([50, 50, 50]);
  expect(GrowthYY(arr3)).toStrictEqual([25, 25]);
  expect(GrowthYY([1, 2, 5])).toStrictEqual([100, 150]);
});

test("'Average of Year to Year' growth rates should be calculated correctly for different values", () => {
  expect(GrowthAverage([0, 0, 0])).toBe(0);
  expect(GrowthAverage([-200, 400])).toBe(100);
  expect(GrowthAverage([10, 10, 10])).toBe(10);
  expect(GrowthAverage([10, 0, 40])).toBeCloseTo(16.6666);
});
