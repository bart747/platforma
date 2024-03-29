function dataVis(props: any) {
  const data: string[] = props.values;
  const topMargin: number = 10;
  const dataToSvg = fmtDataToScale100(data).map((n: number, i: number) => {
    return (
      <svg
        fill="none"
        key={i}
      >
        <circle
          key={i}
          fill="currentColor"
          r="2"
          cx={i * 10 + 10}
          cy={n / 5 + topMargin}
        >
          <animate
            attributeName="r"
            values="1;1.8;2.2"
            dur="0.25s"
            repeatCount="1"
          />
        </circle>
      </svg>
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

function fmtDataToScale100(data: string[]): number[] {
  let dataNum: number[] = data
    .filter((el) => el !== "" && el !== " ")
    .map((el) => Number(el));

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

  // when there's not enough input data
  // make dots invisible by making them out of viewBox
  if (dataNum.length <= 1) {
    dataNum = [200];
  }

  return dataNum
    .map((n) => (((n - minVal) / scale) * 100 - 100) * -1)
    .map((n) => (n === -0 ? 0 : n));
}

export default dataVis;
export { fmtDataToScale100 };
