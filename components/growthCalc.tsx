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

class GrowthCalc extends Component<{}, { value: number[]; out: any }> {
  constructor(props: any) {
    super(props);
    this.state = { value: [], out: {} };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: any) {
    event.preventDefault();
    this.setState({
      value: event.target.value
        .split(/[,;|/]/)
        .filter((el: any) => el !== "" && el !== " ")
        .map((el: any) => Number(el)),
    });
  }

  handleSubmit(event: any) {
    // prevent page refresh
    event.preventDefault();
  };

  fmtNum(n: number): string {
    const precision: number = 3;
    let result: string;
    if (isNaN(n)) {
      result = "unsupported input";
    } else if (n === Infinity) {
      result = ` ∞`;
    } else if (n === -Infinity) {
      result = ` -∞`;
    } else {
      result = n.toFixed(precision) + "%";
    }
    return result;
  }

  compound(inputArr: number[]): string {
    if (inputArr.length <= 1) {
      return "";
    }
    const years = inputArr.length - 1;
    const begin: number = inputArr[0];
    const final: number = inputArr[inputArr.length - 1];

    let growth: number = GrowthCompound(begin, final, years);
    const result: string = this.fmtNum(growth);
    return result;
  }

  startToEnd(inputArr: number[]): string {
    if (inputArr.length <= 1) {
      return "";
    }
    const begin: number = inputArr[0];
    const final: number = inputArr[inputArr.length - 1];

    let growth: number = GrowthStartToEnd(begin, final);
    let result: string = this.fmtNum(growth);
    return result;
  }

  yearToYear(inputArr: number[]): string {
    if (inputArr.length <= 1) {
      return "";
    }
    const yearToYearArr: number[] = GrowthYY(inputArr);
    const result: string = yearToYearArr
      .map((el) => this.fmtNum(el))
      .join(", ");
    return result;
  }

  average(inputArr: number[]): string {
    if (inputArr.length <= 1) {
      return "";
    }
    const yearToYearArr: number[] = GrowthYY(inputArr);
    let averageNum: number = 0;
    if (yearToYearArr.length > 1) {
      averageNum = GrowthAverage(yearToYearArr);
    }
    if (yearToYearArr.length === 1) {
      averageNum = yearToYearArr[0];
    }
    const result: string = this.fmtNum(averageNum);
    return result;
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <div className="text-base mt-6 mb-1 ">
              add comma separated numbers:
            </div>
            <input
              className="text-xl font-mono caret-blue-600 focus:outline-none border-2 border-gray-400 p-2  min-w-full rounded-sm"
              onChange={this.handleChange}
              placeholder="110, 120, 130, 140, 150"
              autoFocus
            />
          </label>
        </form>

        <section className="mt-2 mb-2 text-gray-500">
          <CalcVis values={this.state.value} />
        </section>

        <section className="mt-2">
          <h3 className="text-base font-normal mt-3 mb-1">
            Compound Annual Growth Rate (CAGR):
          </h3>
          <div className="font-mono text-lg bg-orange-100 inline-block min-h-[2.5rem] min-w-[7rem] px-2 py-1.5">
            {this.compound(this.state.value)}
          </div>
          <h3 className="text-base font-normal mt-3 mb-1 ">Beginning to End:</h3>
          <div className="font-mono text-lg bg-orange-100 inline-block min-h-[2.5rem] min-w-[7rem] px-2 py-1.5">
            {this.startToEnd(this.state.value)}
          </div>
          <h3 className="text-base font-normal mt-3 mb-1 ">Average of Y/Y:</h3>
          <div className="font-mono text-lg bg-orange-100 inline-block min-h-[2.5rem] min-w-[7rem] px-2 py-2">
            {this.average(this.state.value)}
          </div>
          <h3 className="text-base font-normal mt-3 mb-1 ">Y/Y List:</h3>
          <div className="font-mono text-md bg-orange-100 inline-block min-h-[2.5rem] min-w-[7rem] px-2 py-2">
            <div
              dangerouslySetInnerHTML={{
                __html: this.yearToYear(this.state.value),
              }}
            />
          </div>
        </section>
      </div>
    );
  }
}

export default GrowthCalc;
