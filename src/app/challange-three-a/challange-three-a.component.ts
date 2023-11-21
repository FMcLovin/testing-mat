import { Component, OnInit } from '@angular/core';
import { LinearRegression } from '../linear-regression/linear-regression';
import { LinearRegressionService } from '../service/linear-regression.service';
import { Correlation } from '../correlation/correlation';
import { Calculate } from '../common/calculate';

@Component({
  selector: 'app-challange-three-a',
  templateUrl: './challange-three-a.component.html',
  styleUrls: ['./challange-three-a.component.css']
})
export class ChallangeThreeAComponent implements OnInit {
  constructor(private linearRegressionService: LinearRegressionService) {}

  calculate = new Calculate();
  linearRegression = new LinearRegression();
  correlation = new Correlation();

  lista1: number[] = [];
  lista2: number[] = [];

  sumX = 0;
  sumY = 0;
  mediaX = 0
  mediaY = 0;
  sumXY = 0;
  sumXX = 0;
  sumYY = 0;
  n = 0;
  x = 386;

  b0 = 0;
  b1 = 0;
  y = 0;

  r = 0;
  rr = 0;


  ngOnInit(): void {
    this.fetchDataForRoute(1);
  }

  fetchDataForRoute(routeNumber: number): void {
    switch (routeNumber) {
      case 1:
        this.linearRegressionService.getTest1().subscribe((data) => {
          console.log(data, "DATA")
          this.lista1 = data.proxy_size;
          this.lista2 = data.actual_added;
        });
        break;
      case 2:
        this.linearRegressionService.getTest2().subscribe((data) => {
          this.lista1 = data.proxy_size;
          this.lista2 = data.actual_develop;
        });
        break;
      case 3:
        this.linearRegressionService.getTest3().subscribe((data) => {
          this.lista1 = data.plan_added;
          this.lista2 = data.actual_added;
        });
        break;
      case 4:
        this.linearRegressionService.getTest4().subscribe((data) => {
          this.lista1 = data.plan_added;
          this.lista2 = data.actual_develop;
        });
        break;
      default:
        console.error('Número de ruta no válido');
    }

    this.handleDataResponse();
  }

  handleDataResponse(): void {

    this.sumX = this.calculate.sumX(this.lista1);
    this.sumY = this.calculate.sumX(this.lista2);
    this.mediaX = this.calculate.calculateMedia(this.lista1);
    this.mediaY = this.calculate.calculateMedia(this.lista2);

    this.sumXY = this.calculate.sumXY(this.lista1, this.lista2);
    this.sumXX = this.calculate.sumXX(this.lista1);
    this.sumYY = this.calculate.sumXX(this.lista2);
    this.n = this.lista1.length;
  }

  updateData(routeNumber: number): void {
    this.fetchDataForRoute(routeNumber);
  }

  calculateValues(): void {
    this.b1 = this.linearRegression.calculateB1(this.sumXY, this.sumX, this.sumY, this.sumXX, this.n);

    this.b0 = this.linearRegression.calculateB0(this.sumX, this.sumY, this.b1, this.n);

    this.y = this.linearRegression.calculateY(this.b0, this.b1, this.x);

    this.r = this.correlation.calculateR(this.lista1, this.lista2);
    this.rr = this.correlation.calculateRR(this.lista1, this.lista2);

  }
}
