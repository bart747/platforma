import React, { Component } from "react";
import {
  GrowthCompound,
  GrowthStartToEnd,
  GrowthYY,
  GrowthAverage,
} from "../util/growthCalc";
import CalcVis from "./growthCalcVis";

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
        .filter((el: any) => el !== "" && el !== " ")
        .map((el: any) => Number(el))
    )
  }

  formatNumberIntoStringValue(num: number): string {
    const precision: number = 3;
    let result: string;
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
    const begin: number = inputArray[0];
    const final: number = inputArray[inputArray.length - 1];

    let growth: number = GrowthCompound(begin, final, years);
    const result: string = this.formatNumberIntoStringValue(growth);
    return result;
  }

  calculateStartToEndGrowth(inputArray: number[]): string {
    const start: number = inputArray[0];
    const end: number = inputArray[inputArray.length - 1];

    let growth: number = GrowthStartToEnd(start, end);
    let result: string = this.formatNumberIntoStringValue(growth);
    return result;
  }

  calculateYearOverYearGrowth(inputArray: number[]): string {
    const yearOverYearArr: number[] = GrowthYY(inputArray);
    const result: string = yearOverYearArr
      .map((el) => this.formatNumberIntoStringValue(el))
      .join(", ");
    return result;
  }

  calculateAverageGrowth(inputArray: number[]): string {
    const yearOverYearArr: number[] = GrowthYY(inputArray);
    let averageNum: number = 0;
    if (yearOverYearArr.length > 1) {
      averageNum = GrowthAverage(yearOverYearArr);
    }
    if (yearOverYearArr.length === 1) {
      averageNum = yearOverYearArr[0];
    }
    const result: string = this.formatNumberIntoStringValue(averageNum);
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
              className="text-xl font-mono caret-blue-600 focus:outline-none border-2 border-gray-400 p-2 min-w-full rounded-sm"
              onChange={this.handleChange}
              placeholder="110, 120, 130, 140, 150"
              autoFocus
            />
          </label>
        </form>

        <section className="mt-2 mb-2 text-gray-500">
          <CalcVis values={this.state.inputValue} />
        </section>

        <section className="mt-2">
          <h3 className="text-base font-normal mt-3 mb-1">
            Compound Annual Growth Rate (CAGR):
          </h3>
          <div className="font-mono text-lg bg-orange-100 inline-block min-h-[2.5rem] min-w-[7rem] px-2 py-1.5">
            {this.state.outputObj.compoundGrowth}
          </div>
          <h3 className="text-base font-normal mt-3 mb-1 ">Beginning to End:</h3>
          <div className="font-mono text-lg bg-orange-100 inline-block min-h-[2.5rem] min-w-[7rem] px-2 py-1.5">
            {this.state.outputObj.startToEndGrowth}
          </div>
          <h3 className="text-base font-normal mt-3 mb-1 ">Average of Y-Over-Y:</h3>
          <div className="font-mono text-lg bg-orange-100 inline-block min-h-[2.5rem] min-w-[7rem] px-2 py-2">
            {this.state.outputObj.averageGrowth}
          </div>
          <h3 className="text-base font-normal mt-3 mb-1 ">Y-Over-Y List:</h3>
          <div className="font-mono text-md bg-orange-100 inline-block min-h-[2.5rem] min-w-[7rem] px-2 py-2">
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
