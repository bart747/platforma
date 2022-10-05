import React, { Component } from "react";
import {
  GrowthCompound,
  GrowthStartToEnd,
  GrowthYY,
  GrowthAverage,
} from "../util/growthCalc";
import CalcVis from "./growthCalcVis";

interface OutputObj {
  compound: string;
  startToEnd: string;
  yearToYear: {
    __html: any;
  };
  average: string;
}

class GrowthCalc extends Component<{}, { value: number[], out: any }> {
  constructor(props: any) {
    super(props);
    this.state = { value: [], out: {} };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: any) {
    this.setState({
      value: event.target.value
        .split(/[,;|/]/)
        .filter((el: any) => el !== "" && el !== " ")
        .map((el: any) => Number(el)),
    });
  }

  compound(inputArr: number[]): string {
    if (inputArr.length <= 1) {
      return "";
    }
    const years = inputArr.length - 1;
    const begin: number = inputArr[0];
    const final: number = inputArr[inputArr.length - 1];

    let growth: number = GrowthCompound(begin, final, years);
    let result: string;
    if (isNaN(growth)) {
      result = "unsupported input";
    } else if (growth === Infinity) {
      result = ` ∞`;
    } else if (growth === -Infinity) {
      result = ` -∞`;
    } else {
      result = growth.toFixed(3) + "%";
    }
    return result;
  }

  startToEnd(inputArr: number[]): string {
    if (inputArr.length <= 1) {
      return "";
    }
    const begin: number = inputArr[0];
    const final: number = inputArr[inputArr.length - 1];

    let growth: number = GrowthStartToEnd(begin, final);
    let result: string;
    if (isNaN(growth)) {
      result = "unsupported input";
    } else if (growth === Infinity) {
      result = ` ∞`;
    } else if (growth === -Infinity) {
      result = ` -∞`;
    } else {
      result = growth.toFixed(3) + "%";
    }
    return result;
  }
  
  yearToYear(inputArr: number[]): any {
    if (inputArr.length <= 1) {
      return [];
    }
    const yearToYearArr: number[] = GrowthYY(inputArr);
    const result: string[] = yearToYearArr.map(el => {
      if (isNaN(el)) {
        return "unsupported input";
      } else if (el === Infinity) {
        return ` ∞`;
      } else if (el === -Infinity) {
        return ` -∞`;
      } else {
        return ` ${el.toFixed(3)}%`;
      }
    });
    return result;
  }

  average(inputArr: number[]): any {
    if (inputArr.length <= 1) {
      return [];
    }
    const yearToYearArr: number[] = GrowthYY(inputArr);
    let averageNum: number = 0;
    let result: string = "";
    if (yearToYearArr.length > 1) {
      averageNum = GrowthAverage(yearToYearArr);
    }
    if (yearToYearArr.length === 1) {
      averageNum = yearToYearArr[0];
    }
    if (isNaN(averageNum)) {
      result = "unsupported input";
    } else if (averageNum === Infinity) {
      result = ` ∞`;
    } else if (averageNum === -Infinity) {
      result = ` -∞`;
    } else {
      result = averageNum.toFixed(3) + "%";
    }
    return result
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
              className="text-lg font-mono caret-blue-600 border-2 border-gray-600 px-1.5 py-1 min-w-full rounded-sm"
              onChange={this.handleChange}
              placeholder="110, 120, 130, 140, 150"
              autoFocus
            />
          </label>
        </form>

        <section className="mt-2 mb-2">
          <CalcVis values={this.state.value} />
        </section>

        <section className="mt-2">
          <h3 className="text-base mt-2 mb-1">
            Compound Annual Growth Rate (CAGR):
          </h3>
          <div className="font-mono text-lg bg-amber-100 inline-block min-h-[2.5rem] min-w-[14rem] px-2 py-1.5">
            {this.compound(this.state.value)}
          </div>
          <h3 className="text-base mt-4 mb-1 ">Beginning to End:</h3>
          <div className="font-mono text-lg bg-amber-100 inline-block min-h-[2.5rem] min-w-[14rem] px-2 py-1.5">
            {this.startToEnd(this.state.value)}
          </div>
          <h3 className="text-base mt-4 mb-1 ">Average of Y/Y:</h3>
          <div className="font-mono text-lg bg-amber-100 inline-block min-h-[2.5rem] min-w-[14rem] px-2 py-2">
            {this.average(this.state.value)}
          </div>
          <h3 className="text-base mt-4 mb-1 ">Y/Y List:</h3>
          <div className="font-mono text-md bg-amber-100 inline-block min-h-[2.5rem] min-w-[14rem] px-2 py-2">
            <div
              dangerouslySetInnerHTML={
                { __html: this.yearToYear(this.state.value) }
              }
            />
          </div>
        </section>
      </div>
    );
  }
}

export default GrowthCalc;
