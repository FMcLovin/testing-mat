import { Component } from '@angular/core';
import { Calculate } from '../common/calculate';

@Component({
  selector: 'app-t-distribution',
  templateUrl: './t-distribution.component.html',
  styleUrls: ['./t-distribution.component.css'],
})
export class TDistributionComponent {
  calculate = new Calculate();

  tDistribution(
    x0: number,
    x1: number,
    degreesOfFreedom: number,
    numSegments: number,
    error: number
  ): number {
    const calculateTS = (x: number) => this.calculate.getTS(x, degreesOfFreedom);
    return this.calculate.simpson(x0, x1, numSegments, error, calculateTS);
  }
}
