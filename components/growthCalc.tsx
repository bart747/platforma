import React, { Component } from 'react'
import { start } from 'repl';

class GCalc extends Component {
  constructor(props) {
    super(props)
    this.state = {input: []}
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({input: event.target.value.split(",")});
    setTimeout(()=> {console.log(this.state.input)}, 100)
  }

  FmtGrowth(numbers: any[]) :any {
    const arr = numbers.slice()

    if (arr.length - 1 < 1 || arr[1] === '' || arr[1] === ' ' ) {
      return 0
    }
    if (arr[arr.length - 1] === '' || arr[arr.length - 1] === ' ') {
      arr.pop()
    }

    const years = arr.length - 1
    const startVal = Number(arr[0])
    console.log(startVal)
    const endVal = Number(arr[arr.length - 1])
    console.log(endVal)
    const comp = growthCompound(startVal, endVal, years).toFixed(3);
    console.log(comp)
    if (Number.isNaN(comp)) {
      return "wrong format of input data"
    }
    // console.log(calc)

    const gyy = growthYY(arr).map((el) => el.toFixed(3) + "%, ")

    const gste = growthStartToEnd(startVal, endVal, years).toFixed(3);

    return {compound: comp + "%",  yy: gyy, startToEnd: gste + "%" } 
  }

  render () {
    return (
      <div>
        <form>
        <label>
          <div className="text-base mt-6 mb-1 ">add comma separated numbers:</div>
          <input
            className="text-lg font-mono text-blue-800 border-2 border-gray-600 px-1.5 py-1 min-w-full"
            value={this.state.input} onChange={this.handleChange}
            placeholder="110, 120, 130, 140, 150"
          />
        </label>
        </form>
        <section className='font-mono'>
          <h3 className="text-sm mt-4 mb-1 ">Compound Annual (CAGR):</h3>
          <div className="transition-all text-xl text-green-800 bg-amber-100 inline-block min-h-[2.5rem] min-w-[17rem] px-1.5 py-1.5">
            { this.FmtGrowth(this.state.input).compound }
          </div>
          <h3 className="text-sm mt-4 mb-1 ">Beginning to End:</h3>
          <div className="text-xl text-green-800 bg-amber-100 inline-block min-h-[2.5rem] min-w-[17rem] px-1.5 py-1.5">
            { this.FmtGrowth(this.state.input).startToEnd  }
          </div>
          <h3 className="text-sm mt-4 mb-1 ">Y/Y:</h3>
          <div className=" transition-all text-md text-green-800 bg-amber-100 inline-block min-h-[2.5rem] min-w-[17rem] px-1.5 py-2">
            { this.FmtGrowth(this.state.input).yy }
          </div>
        </section>
      </div>
    )
  }
}

function growthCompound(startVal: number, endVal: number, years:number): number {
  return (Math.pow((endVal / startVal), (1 / years)) - 1) * 100
}

function growthYY(arr: any) {
  let acc = []
  for (let i = 0; i < arr.length - 1; i+=1) {
    let current = arr[i]
    let calc = ((arr[i + 1] - current) / current) * 100;
    acc.push(calc)
  }
  return acc
}

function growthStartToEnd(startVal: number, endVal: number, years:number): number {
  return ((endVal - startVal) / startVal) * 100
}

export default GCalc