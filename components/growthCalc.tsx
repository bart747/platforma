import React, { Component } from "react";
import {
  GrowthCompound,
  GrowthStartToEnd,
  GrowthYY,
  GrowthAverage,
} from "../util/math/growthCalc";
import GrowthVisualiser from "./growthVisualiser";

interface OutputObj {
  compoundGrowth: string,
  startToEndGrowth: string,
  averageGrowth: string,
  yearOverYearGrowth: string;
}

class GrowthCalc extends Component<{}, { inputValue: number[], outputObj: OutputObj }> {
  constructor(props: any) {
    super(props);
    this.state = {
      inputValue: [],
      outputObj: {
        compoundGrowth: "",
        startToEndGrowth: "",
        averageGrowth: "",
        yearOverYearGrowth: ""
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: any) {
    this.setState(
      { inputValue: this.formatFormInputIntoArrayOfNumbers(event.target.value) },
      () => {
        if (this.state.inputValue.length > 1) {
          this.setState({
            outputObj: {
              compoundGrowth: this.calculateCompoundGrowth(this.state.inputValue),
              startToEndGrowth: this.calculateStartToEndGrowth(this.state.inputValue),
              averageGrowth: this.calculateAverageGrowth(this.state.inputValue),
              yearOverYearGrowth: this.calculateYearOverYearGrowth(this.state.inputValue)
            }
          })
        } else {
          this.setState({
            outputObj: {
              compoundGrowth: "",
              startToEndGrowth: "",
              averageGrowth: "",
              yearOverYearGrowth: ""
            }
          })
        }
      }
    )
  }

  handleSubmit(event: any) {
    // prevent page refresh
    event.preventDefault();
  };

  formatFormInputIntoArrayOfNumbers(input: string): number[] {
    return (
      input
        .split(/[,;|/]/)
        .filter((el) => el !== "" && el !== " ")
        .map((el) => Number(el))
    )
  }

  formatNumberIntoStringValue(num: number): string {
    const precision = 3;
    let result;
    if (isNaN(num)) {
      result = "unsupported input";
    } else if (num === Infinity) {
      result = ` ∞%`;
    } else if (num === -Infinity) {
      result = ` -∞%`;
    } else {
      result = num.toFixed(precision) + "%";
    }
    return result;
  }

  calculateCompoundGrowth(inputArray: number[]): string {
    const years = inputArray.length - 1;
    const begin = inputArray[0];
    const final = inputArray[inputArray.length - 1];

    let growth = GrowthCompound(begin, final, years);
    const result = this.formatNumberIntoStringValue(growth);
    return result;
  }

  calculateStartToEndGrowth(inputArray: number[]): string {
    const start = inputArray[0];
    const end = inputArray[inputArray.length - 1];

    let growth = GrowthStartToEnd(start, end);
    let result = this.formatNumberIntoStringValue(growth);
    return result;
  }

  calculateYearOverYearGrowth(inputArray: number[]): string {
    const yearOverYearArr = GrowthYY(inputArray);
    const result = yearOverYearArr
      .map((el) => this.formatNumberIntoStringValue(el))
      .join(", ");
    return result;
  }

  calculateAverageGrowth(inputArray: number[]): string {
    const yearOverYearArr = GrowthYY(inputArray);
    let averageNum = 0;
    if (yearOverYearArr.length > 1) {
      averageNum = GrowthAverage(yearOverYearArr);
    }
    if (yearOverYearArr.length === 1) {
      averageNum = yearOverYearArr[0];
    }
    const result = this.formatNumberIntoStringValue(averageNum);
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
              className="text-xl font-mono caret-blue-400 placeholder:text-slate-500 placeholder:italic focus:outline-none border-2 border-neutral-500 bg-slate-700 p-2 min-w-full rounded-sm"
              onChange={this.handleChange}
              placeholder="110, 120.5, 130, 140, 150"
              autoFocus
            />
          </label>
        </form>

        <section className="mt-2 mb-2 text-neutral-400">
          <GrowthVisualiser values={this.state.inputValue} />
        </section>

        <section className="mt-2">
          <h3 className="text-base font-normal mt-3 mb-1">
            Compound Annual Growth Rate (CAGR):
          </h3>
          <div className="font-mono text-lg bg-stone-700  00 inline-block min-h-[2.5rem] min-w-[7rem] px-2 py-1.5">
            {this.state.outputObj.compoundGrowth}
          </div>
          <h3 className="text-base font-normal mt-3 mb-1 ">Beginning to End:</h3>
          <div className="font-mono text-lg bg-stone-700 inline-block min-h-[2.5rem] min-w-[7rem] px-2 py-1.5">
            {this.state.outputObj.startToEndGrowth}
          </div>
          <h3 className="text-base font-normal mt-3 mb-1 ">Average of Y-Over-Y:</h3>
          <div className="font-mono text-lg bg-stone-700 inline-block min-h-[2.5rem] min-w-[7rem] px-2 py-2">
            {this.state.outputObj.averageGrowth}
          </div>
          <h3 className="text-base font-normal mt-3 mb-1 ">Y-Over-Y List:</h3>
          <div className="font-mono text-md bg-stone-700 inline-block min-h-[2.5rem] min-w-[7rem] px-2 py-2">
            <div
              dangerouslySetInnerHTML={{
                __html: this.state.outputObj.yearOverYearGrowth,
              }}
            />
          </div>
        </section>
      </div>
    );
  }
}

export default GrowthCalc;
