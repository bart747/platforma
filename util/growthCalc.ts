function GrowthCompound(begin: number, final: number, years: number): number {
  let calc: number;

  if (begin > 0 && final >= 0) {
    calc = (final / begin) ** (1 / years) - 1;
  } else if (begin < 0 && final < 0) {
    calc = -1 * ((Math.abs(final) / Math.abs(begin)) ** (1 / years) - 1);
  } else {

  /*// !works only in some cases!
  // When the list is crossing the zero, it  will often return incorrect values;
  // more than two values is usually problematic;
  // and there's no percentage of zero.

  else if ( begin > 0 && final < 0 ) { 
    calc = -1 * (((Math.abs(final) + begin) / begin) ** (1 / years));
  }

  else if ( begin < 0 && final > 0 ) { 
    calc = ((final + 2 * Math.abs(begin)) / Math.abs(begin)) ** (1 / years) - 1;
  }
*/
    return NaN;
  }
  return calc * 100;
}

function GrowthStartToEnd(begin: number, final: number): number {
  if (begin < 0) {
    return -1 * (((final - begin) / begin) * 100);
  }
  return ((final - begin) / begin) * 100;
}

function GrowthYY(arr: number[]): number[] {
  let acc = [];
  for (let i = 0; i < arr.length - 1; i += 1) {
    let current = arr[i];
    let calc = ((arr[i + 1] - current) / current) * 100;
    if (current < 0) {
      calc = calc * -1;
    }
    acc.push(calc);
  }
  return acc;
}

function GrowthAverage(arr: number[]): number {
  return arr.reduce((previous, current) => previous + current) / arr.length;
}

export { GrowthCompound, GrowthStartToEnd, GrowthYY, GrowthAverage };
