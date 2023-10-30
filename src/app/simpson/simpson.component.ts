import { Component } from '@angular/core';

@Component({
  selector: 'app-simpson',
  templateUrl: './simpson.component.html',
  styleUrls: ['./simpson.component.css'],
})
export class SimpsonComponent {
  simpson(x0: number, x1: number, num_seg: number, error: number, f: (x: number) => number): number {
    let integral = 0;
    let integralPrev = 0;

    do {
      integralPrev = integral;
      const h = (x1 - x0) / num_seg;
      let sum = f(x0) + f(x1);

      for (let i = 1; i < num_seg; i++) {
        const x = x0 + i * h;
        sum += (i % 2 === 0 ? 2 : 4) * f(x);
      }

      integral = (h / 3) * sum;
    } while (Math.abs(integral - integralPrev) > error);

    console.log(`p=${integral}`);
    return integral;
  }
}