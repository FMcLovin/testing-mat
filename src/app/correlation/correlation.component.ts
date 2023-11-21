import { Component, OnInit } from '@angular/core';
import { LinearRegressionService } from '../service/linear-regression.service';
import { Calculate } from '../common/calculate';
import { LinearRegressionComponent } from '../linear-regression/linear-regression.component';

@Component({
  selector: 'app-correlation',
  templateUrl: './correlation.component.html',
  styleUrls: ['./correlation.component.css'],
})
export class CorrelationComponent implements OnInit {
  constructor(private linearRegressionService: LinearRegressionService) {}

  lista1: number[] = [];
  lista2: number[] = [];
  selectedRouteNumber: number = 1;

  calculate = new Calculate();

  ngOnInit(): void {
    this.fetchDataForRoute(this.selectedRouteNumber);
  }

  fetchDataForRoute(routeNumber: number): void {
    switch (routeNumber) {
      case 1:
        this.linearRegressionService.getTest1().subscribe((data) => {
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

    this.handleDataResponse({ prop1: this.lista1, prop2: this.lista2 });
  }

  handleDataResponse(data: any): void {
    console.log(data);
  }

  updateData(routeNumber: number): void {
    this.fetchDataForRoute(routeNumber);
  }

  calculateR(): number {
    var r = this.calculate.calculateR(this.lista1, this.lista2);

    console.log(r);

    return r;
  }

  calculateRR(): number {
    var rr = this.calculate.calculateRR(
      this.calculate.calculateR(this.lista1, this.lista2)
    );

    console.log(rr);

    return rr;
  }
}
