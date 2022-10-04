
function dataVis(props) {
  let data = [1]

  if (props.values.length > 1) { 
    data = props.values
  }

  const maxVal = data.reduce((a, b) => Math.max(a, b));
  // console.log(maxVal)

  const minVal = data.reduce((a, b) => Math.min(a, b));
  // console.log(minVal)

  let scale = maxVal - minVal;

  const topMargin = 10
  const fmtDataToScale = data.map(n => (((( n - minVal) / scale) * 100) - 100) * -1)
  console.log(fmtDataToScale)

  const fmtDataToSvg = fmtDataToScale.map((n, i) => {
    if (isNaN(n)) {
      n = 1
    }
    return (
      <circle key={i} cx={i * 10 + 10} cy={n/5 + topMargin} r="2" fill="currentColor" />
    )
  
  })

  return (
    <div>
      <svg
        width="400"
        height="40"
        viewBox="0 0 400 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
          {fmtDataToSvg}
      </svg>
    </div>
  );
}

export default dataVis;
