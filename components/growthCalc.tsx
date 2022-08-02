import React, { Component } from "react";
import {
  GrowthCompound,
  GrowthStartToEnd,
  GrowthYY,
  GrowthAverage,
} from "../util/growthCalc";

interface OutputObj {
  compound: string;
  startToEnd: string;
  yearToYear: {
    __html: any;
  };
  average: string;
}

class GrowthCalc extends Component<{}, { value: string[] }> {
  constructor(props: any) {
    super(props);
    this.state = { value: [] };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: any) {
    this.setState({ value: event.target.value.split(/[,;|/]/) });
  }

  FmtOutput(inputArr: string[]): OutputObj {
    const arrStr: string[] = inputArr.slice();

    if (arrStr.length === 0 || arrStr[1] === "" || arrStr[1] === " ") {
      return {
        compound: "",
        startToEnd: "",
        yearToYear: { __html: [] },
        average: "",
      };
    }
    if (arrStr[arrStr.length - 1] === "" || arrStr[arrStr.length - 1] === " ") {
      arrStr.pop();
    }

    const arrNum = arrStr.map((el) => Number(el));
    const years = arrNum.length - 1;
    const begin: number = arrNum[0];
    const final: number = arrNum[arrNum.length - 1];

    let compound: any = GrowthCompound(begin, final, years);
    if (isNaN(compound)) {
      compound = "unsupported input";
    } else {
      compound = compound.toFixed(3) + "%";
    }

    let startToEnd: any = GrowthStartToEnd(begin, final);
    if (isNaN(startToEnd)) {
      startToEnd = "unsupported input";
    } else {
      startToEnd = startToEnd.toFixed(3) + "%";
    }

    const yearToYearNum: number[] = GrowthYY(arrNum);

    const yearToYear: string[] = yearToYearNum.map((el, i) => {
      if (isNaN(el)) {
        return "unsupported input";
      } else if (i % 2 === 0) {
        return `<span class='text-green-800'> ${el.toFixed(3)}%</span>`;
      } else {
        return `<span class='text-orange-900'> ${el.toFixed(3)}%</span>`;
      }
    });

    let averageNum: number = 0;
    let average: string = "";
    if (yearToYearNum.length > 1) {
      averageNum = GrowthAverage(yearToYearNum);
    }
    if (isNaN(averageNum)) {
      average = "unsupported input";
    } else {
      average = averageNum.toFixed(3) + "%";
    }

    return {
      compound: compound,
      startToEnd: startToEnd,
      yearToYear: { __html: yearToYear },
      average: average,
    };
  }

  render() {
    return (
      <div>
        <form>
          <label>
            <div className="text-base mt-6 mb-1 ">
              add comma separated numbers:
            </div>
            <input
              className="text-lg font-mono border-2 border-gray-600 px-1.5 py-1 min-w-full rounded-sm"
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="110, 120, 130, 140, 150"
            />
          </label>
        </form>

        <section className="mt-6">
          <h3 className="text-base mt-4 mb-1">
            Compound Annual Growth Rate (CAGR):
          </h3>
          <div className="font-mono text-lg text-green-800 bg-amber-100 inline-block min-h-[2.5rem] min-w-[17rem] px-1.5 py-1.5">
            {this.FmtOutput(this.state.value).compound}
          </div>
          <h3 className="text-base mt-4 mb-1 ">Beginning to End:</h3>
          <div className="font-mono text-lg text-green-800 bg-amber-100 inline-block min-h-[2.5rem] min-w-[17rem] px-1.5 py-1.5">
            {this.FmtOutput(this.state.value).startToEnd}
          </div>
          <h3 className="text-base mt-4 mb-1 ">Average of Y/Y:</h3>
          <div className="font-mono text-lg text-green-800 bg-amber-100 inline-block min-h-[2.5rem] min-w-[17rem] px-1.5 py-2">
            {this.FmtOutput(this.state.value).average}
          </div>
          <h3 className="text-base mt-4 mb-1 ">Y/Y List:</h3>
          <div className="font-mono text-md bg-amber-100 inline-block min-h-[2.5rem] min-w-[17rem] px-1.5 py-2">
            <div
              dangerouslySetInnerHTML={
                this.FmtOutput(this.state.value).yearToYear
              }
            />
          </div>
        </section>
      </div>
    );
  }
}

export default GrowthCalc;
