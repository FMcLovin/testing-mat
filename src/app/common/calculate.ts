export class Calculate {
  private g: number = 7;
  private C: number[] = [
    0.99999999999980993, 676.5203681218851, -1259.1392167224028,
    771.32342877765313, -176.61502916214059, 12.507343278686905,
    -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7,
  ];

  /**
   * sumX This function sumes all numbers in array
   * @param {number[]} lista Array of numbers
   * @return {[number]} The result of sum of numbers
   */
  sumX(lista: number[]): number {
    var sum = 0;
    console.log(lista);
    for (let i = 0; i < lista.length; i++) {
      sum += lista[i];
    }

    return sum;
  }

  /**
   * sumXX This function sums the multiplication of all numbers in array by itselves
   * @param {number[]} lista Array of numbers
   * @return {[number]} The result of sum of numbers
   */
  sumXX(lista: number[]): number {
    var sum = 0;

    for (let i = 0; i < lista.length; i++) {
      sum += lista[i] * lista[i];
    }

    return sum;
  }

  /**
   * sumXX This function sums the multiplication of all numbers in array by another array
   * @param {number[]} lista Array of numbers
   * @return {[number]} The result of sum of numbers
   */
  sumXY(listaX: number[], listaY: number[]): number {
    var sum = 0;

    for (let i = 0; i < listaX.length; i++) {
      sum += listaX[i] * listaY[i];
    }

    return sum;
  }

  calculateB1(
    sumXY: number,
    sumX: number,
    sumY: number,
    sumXX: number,
    n: number
  ): number {
    var b1 = 0;

    b1 = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);

    return b1;
  }

  calculateB0(sumX: number, sumY: number, b1: number, n: number): number {
    var b0 = 0;

    b0 = (sumY - b1 * sumX) / n;

    return b0;
  }

  calculateY(b0: number, b1: number, x: number): number {
    var y = 0;

    y = b0 + b1 * x;

    return y;
  }

  calculateMedia(lista: number[]): number {
    var media = 0;
    var sum = this.sumX(lista);

    media = sum / lista.length;

    return media;
  }

  calculateRR(r: number): number {
    var rr = 0;

    rr = r * r;

    return rr;
  }

  calculateR(listaX: number[], listaY: number[]): number {
    var r = 0;
    var sumX = this.sumX(listaX);
    var sumY = this.sumX(listaY);
    var sumXX = this.sumXX(listaX);
    var sumYY = this.sumXX(listaY);
    var sumXY = this.sumXY(listaX, listaY);
    var n = listaX.length;

    r =
      (n * sumXY - sumX * sumY) /
      Math.sqrt((n * sumXX - sumX * sumX) * (n * sumYY - sumY * sumY));

    return r;
  }

  /**
   * simpson This function calculates simpson's rule
   * @param {number} x0 lower limit
   * @param {number} x1 higher limit
   * @param {number} numSegments segments of interval
   * @param {number} error error
   * @param {(x: number) => number} f Function that it's wanted to integrate
   *
   * @return {[number]} The result of simpson's rule
   */
  simpson(
    x0: number,
    x1: number,
    numSegments: number,
    error: number,
    f: (x: number) => number
  ): number {
    let integral = 0;
    let integralPrev = 0;

    do {
      integralPrev = integral;
      let h = (x1 - x0) / numSegments;
      let sum = f(x0) + f(x1);

      let i = 1;
      while (i < numSegments) {
        const x = x0 + i * h;
        sum += i % 2 === 0 ? 2 * f(x) : 4 * f(x);
        i++;
      }

      integral = (h / 3) * sum;
    } while (Math.abs(integral - integralPrev) > error);

    return integral;
  }

  /**
   * getTS This function calculates Student's t-distribution
   * @param {number} x value
   * @param {number} degreesOfFreedom degrees of freedom
   *
   * @return {[number]} The result of Student's t-distribution
   */
  getTS(x: number, degreesOfFreedom: number): number {
    const numerador = this.gamma((degreesOfFreedom + 1) / 2);
    const denominador =
      Math.sqrt(degreesOfFreedom * Math.PI) * this.gamma(degreesOfFreedom / 2);

    const tStudent =
      (numerador / denominador) *
      Math.pow(1 + (x * x) / degreesOfFreedom, -(degreesOfFreedom + 1) / 2);

    return tStudent;
  }

  /**
   * gamma This function calculates gamma of z r(z)
   * Extracted from: https://sv.wikipedia.org/wiki/Gammafunktionen
   * @param {number} z value
   *
   * @return {[number]} The result of the gamma function
   */
  gamma(z: number): number {
    if (z < 0.5) {
      return Math.PI / (Math.sin(Math.PI * z) * this.gamma(1 - z));
    } else {
      z -= 1;

      var x = this.C[0];

      var i = 1;
      while (i < this.C.length) {
        x += this.C[i] / (z + i);
        i++;
      }

      var t = z + this.g + 0.5;
      return Math.sqrt(2 * Math.PI) * Math.pow(t, z + 0.5) * Math.exp(-t) * x;
    }
  }
}
