import { Calculate } from '../common/calculate';

export class LinearRegression { 

  calculate = new Calculate();

  //Función para calcular B1
  calculateB1(sumXY: number, sumX: number, sumY: number, sumXX: number, n: number): number {
    var b1 = 0;
    
    b1 = this.calculate.calculateB1(sumXY, sumX, sumY, sumXX, n);

    return b1;
  }

  //Función para cualcular B0
  calculateB0(sumX: number, sumY: number, b1: number, n: number): number {
    var b0 = 0;

    b0 = this.calculate.calculateB0(sumX, sumY, b1, n);

    return b0;
  }

  calculateY(b0: number, b1: number, x: number): number {
    var y = 0;

    y = this.calculate.calculateY(b0, b1, x);

    return y;
  }
}