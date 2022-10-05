function dataVis(props: any) {
  const data: string[] = props.values;
  const topMargin: number = 10;
  const dataToSvg = fmtDataToScale100(data).map((n: number, i: number) => {
    return (
      <circle
        key={i}
        cx={i * 10 + 10}
        cy={n / 5 + topMargin}
        r="2"
        fill="currentColor"
      />
    );
  });

  return (
    <div>
      <svg
        width="400"
        height="40"
        viewBox="0 0 400 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {dataToSvg}
      </svg>
    </div>
  );
}

function fmtDataToScale100(data: string[]) {
  let dataNum: number[] = data.filter((el) => el !== "" && el !== " ").map(el => Number(el));

  // empty arrays are not accepted
  if (dataNum.length < 1) {
    dataNum = [0];
  }

  const maxVal: number = dataNum.reduce((a, b) => Math.max(a, b));
  const minVal: number = dataNum.reduce((a, b) => Math.min(a, b));
  let scale: number = maxVal - minVal;
  if (scale === 0) {
    scale = 1;
  }

  // make dots invisible by making the out of viewBox
  // when there's not enough input data
  if (dataNum.length <= 1) {
    dataNum = [200];
  }

  return dataNum
    .map((n) => (((n - minVal) / scale) * 100 - 100) * -1)
    .map((n) => (n === -0 ? 0 : n));
}

export default dataVis;
export { fmtDataToScale100 };
