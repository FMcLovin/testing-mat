import { Calculate } from '../common/calculate';

export class Correlation { 

  calculate = new Calculate();

  calculateR(lista1: number[], lista2: number[]): number {
    var r = this.calculate.calculateR(lista1, lista2);

    return r;
  }

  calculateRR(lista1: number[], lista2: number[]): number {
    var rr = this.calculate.calculateRR(
      this.calculate.calculateR(lista1, lista2)
    );

    return rr;
  }
}
