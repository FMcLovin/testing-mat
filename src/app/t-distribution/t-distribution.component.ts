import { Component, OnInit } from '@angular/core';
import { Calculate } from '../common/calculate';

@Component({
  selector: 'app-t-distribution',
  templateUrl: './t-distribution.component.html',
  styleUrls: ['./t-distribution.component.css'],
})
export class TDistributionComponent implements OnInit {
  calculate = new Calculate();

  tStudent: number = 0;

  x0: number = 0;
  x1: number = 0;
  degreesOfFreedom: number = 0;
  numSegments: number = 0;
  error: number = 0;

  ngOnInit() {
  }

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

  calculateValues(): void {
    this.tStudent = this.tDistribution(this.x0, this.x1, this.degreesOfFreedom, this.numSegments, this.error);
  }
}
