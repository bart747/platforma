import React, { Component } from 'react'

function growthCompound(begin: number, final: number, years:number): number {
  let calc: number;

  if ( begin > 0 && final > 0 ) {
    calc = ((final / begin) ** (1 / years)) - 1;
  }

  else if ( begin < 0 && final < 0 ) {
    calc = -1 * ((Math.abs(final) / Math.abs(begin)) ** (1 / years) - 1);
  }

/* works only in some cases
  else if ( begin > 0 && final < 0 ) { 
    calc = -1 * (((Math.abs(final) + begin) / begin) ** (1 / years));
  }

  else if ( begin < 0 && final > 0 ) { 
    calc = ((final + 2 * Math.abs(begin)) / Math.abs(begin)) ** (1 / years) - 1;
  }
*/

  else {
    return NaN;
  }

  return calc * 100;
}

function growthStartToEnd(begin: number, final: number): number {
  if (begin < 0) {
    return -1 * (((final - begin) / begin) * 100);
  } 
  return ((final - begin) / begin) * 100;
}

function growthYY(arr: number[]) :number[] {
  let acc = []
  for (let i = 0; i < arr.length - 1; i+=1) {
    let current = arr[i];
    let calc = ((arr[i + 1] - current) / current) * 100;
    if (current < 0) {
      calc = calc * -1;
    }
    acc.push(calc);
  }
  return acc;
}

class GrowthCalc extends Component<{}, { value: string[] }> {
  constructor(props) {
    super(props);
    this.state = {value: []};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value.split(",")});
  }

  FmtOutput(inputArr: any[]) :any {
    const arrStr: string[] = inputArr.slice();

    if (arrStr.length === 0 || arrStr[1] === '' || arrStr[1] === ' ' ) {
      return 0;
    }
    if (arrStr[arrStr.length - 1] === '' || arrStr[arrStr.length - 1] === ' ') {
      arrStr.pop();
    }

    const arrNum =  arrStr.map((el) => Number(el)) ;

    const years = arrNum.length - 1;
    const begin: number = arrNum[0];
    const final: number = arrNum[arrNum.length - 1];

    let compound: any = growthCompound(begin, final, years);
    if (isNaN(compound)) {
      compound = "unsupported input";
    } else {
      compound = compound.toFixed(3) + "%";
    }

    let startToEnd: any = growthStartToEnd(begin, final);
    if (isNaN(startToEnd)) {
      startToEnd = "unsupported input";
    } else {
      startToEnd = startToEnd.toFixed(3) + "%";
    }

    const yearToYear = growthYY(arrNum).map((el) => el.toFixed(3) + "%, ");

    return {compound: compound, startToEnd: startToEnd, yearToYear: yearToYear } 
  }

  render () {
    return (
      <div>

        <form>
        <label>
          <div className="text-base mt-6 mb-1 ">add comma separated numbers:</div>
          <input
            className="text-lg font-mono border-2 border-gray-600 px-1.5 py-1 min-w-full rounded-sm"
            value={this.state.value} onChange={this.handleChange}
            placeholder="110, 120, 130, 140, 150"
          />
        </label>
        </form>

        <section className='mt-6'>
          <h3 className="text-base mt-4 mb-1">Compound Annual Growth Rate (CAGR):</h3>
          <p className='mb-1 text-sm font-sans text-gray-600'>
            With modifications for negative numbers.
          </p>
          <p className='mb-2 text-sm font-sans text-gray-600'>
            Does not work when the list is crossing the zero<br />
            (i.e. stars with negative and ends wih positive values).
          </p>
          <div className="transition-all text-xl text-green-800 bg-amber-100 inline-block min-h-[2.5rem] min-w-[17rem] px-1.5 py-1.5">
            { this.FmtOutput(this.state.value).compound }
          </div>
          <h3 className="text-base mt-4 mb-1 ">Beginning to End:</h3>
          <div className="text-xl text-green-800 bg-amber-100 inline-block min-h-[2.5rem] min-w-[17rem] px-1.5 py-1.5">
            { this.FmtOutput(this.state.value).startToEnd  }
          </div>
          <h3 className="text-base mt-4 mb-1 ">Y/Y:</h3>
          <div className=" text-md text-green-800 bg-amber-100 inline-block min-h-[2.5rem] min-w-[17rem] px-1.5 py-2">
            { this.FmtOutput(this.state.value).yearToYear }
          </div>
        </section>

      </div>
    )
  }
}

export default GrowthCalc
export { growthCompound, growthStartToEnd, growthYY }