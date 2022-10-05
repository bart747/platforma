function dataVis(props) {
  const data = props.values;
  const topMargin = 10;
  const dataToSvg = fmtDataToScale100(data).map((n, i) => {
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

function fmtDataToScale100(data) {
  data = data.filter((n) => n !== "" && n !== " ");

  // empty arrays are not accepted
  if (data.length < 1) {
    data = [0];
  }

  const maxVal = data.reduce((a, b) => Math.max(a, b));
  const minVal = data.reduce((a, b) => Math.min(a, b));
  let scale = maxVal - minVal;
  if (scale === 0) {
    scale = 1;
  }

  // make dots invisible by making the out of viewBox
  // when there's not enough input data
  if (data.length <= 1) {
    data = [200];
  }

  return data
    .map((n) => (((n - minVal) / scale) * 100 - 100) * -1)
    .map((n) => (n === -0 ? 0 : n));
}

export default dataVis;
export { fmtDataToScale100 };
