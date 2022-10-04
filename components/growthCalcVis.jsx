function dataVis(props) {
  let data = [1];

  if (props.values.length > 1) {
    data = props.values;
  }

  const topMargin = 10;
  const dataOnScale = fmtDataToScale100(data);
   console.log(dataOnScale)

  const dataToSvg = dataOnScale.map((n, i) => {
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
  const maxVal = data.reduce((a, b) => Math.max(a, b));
  const minVal = data.reduce((a, b) => Math.min(a, b));
  let scale = maxVal - minVal;
  scale === 0 ? scale = 1 : scale = scale;
  return data
    .map(n => (((n - minVal) / scale) * 100 - 100) * -1)
    .map(n => n === -0 ? 0 : n)
}

export default dataVis;
export { fmtDataToScale100 };
