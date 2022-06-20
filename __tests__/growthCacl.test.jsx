import renderer from 'react-test-renderer';
import GrowthCalc, { growthCompound, growthStartToEnd, growthYY, growthAverage } from '../components/growthCalc';

it('component matching to snapshot', () => {
  const component = renderer.create(
    <GrowthCalc />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

const arr1 = [10, 20, 40, 80, 160, 320]; 
const arr2 = [-100, -50, -25, -12.5]
const arr3 = [10, 12.5, 15.625]
console.log(growthYY([1, 1, 1]));
test('compound growth rate should be calculated correctly on arrays of both, positive, and of negative numbers', () => {
  expect(growthCompound(0, 0, 0)).not.toBe(0); // should be NaN or send warning message
  expect(growthCompound(1, 1, 5)).toBe(0);
  expect(growthCompound(arr1[0], arr1[arr1.length - 1], arr1.length - 1)).toBe(100);
  expect(growthCompound(arr2[0], arr2[arr2.length - 1], arr2.length - 1)).toBe(50);
  expect(growthCompound(arr3[0], arr3[arr3.length - 1], arr3.length - 1)).toBe(25);
});

test("'Beginning to End' growth rate should be calculated correctly on arrays of both, positive, and of negative numbers", () => {
  expect(growthStartToEnd(0, 0)).not.toBe(0); // should be NaN or send warning message
  expect(growthStartToEnd(1, 1)).toBe(0);
  expect(growthStartToEnd(arr1[0], arr1[arr1.length - 1])).toBe(3100);
  expect(growthStartToEnd(arr2[0], arr2[arr2.length - 1])).toBe(87.5); 
  expect(growthStartToEnd(arr3[0], arr3[arr3.length - 1])).toBe(56.25);
});

test("'Year to Year' growth rates should be calculated correctly for different values and presented in an array", () => {
  expect(growthYY([0, 0, 0])).not.toBe(0); // should be NaN or send warning message
  expect(growthYY([1, 1, 1])).toStrictEqual([0, 0]);
  expect(growthYY(arr2)).toStrictEqual([50, 50, 50]); 
  expect(growthYY(arr3)).toStrictEqual([25, 25]);
  expect(growthYY([1, 2, 5])).toStrictEqual([100, 150]);
});

test("'Average of Year to Year' growth rates should be calculated correctly for different values", () => {
  expect(growthAverage([0, 0, 0])).toBe(0);
  expect(growthAverage([-200, 400])).toBe(100);
  expect(growthAverage([10, 10, 10])).toBe(10);
  expect(growthAverage([10, 0, 40])).toBeCloseTo(16.6666);
});