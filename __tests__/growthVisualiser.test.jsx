import renderer from "react-test-renderer";
import CalcVis from "../components/growthVisualiser";
import { fmtDataToScale100 } from "../components/growthVisualiser";

const values = [1, 2, 3];
it("component matching to snapshot", () => {
  const component = renderer.create(<CalcVis values={values} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

const arr1 = [10, 20, 40, 80, 160, 320];
const arr2 = [-100, -50, -25, -12.5];
const arr3 = [10, 12.5, 15.625];
test("transform data array to fit 100-points scale", () => {
  expect(fmtDataToScale100([100, 150, 200])).not.toBe([100, 50, 1]);
  expect(fmtDataToScale100([100, 150, 200])).toStrictEqual([100, 50, 0]);
});
