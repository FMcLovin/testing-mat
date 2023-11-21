import { TestBed } from '@angular/core/testing';
import { LinearRegression } from './linear-regression';
import { LinearRegressionService } from '../service/linear-regression.service';
import { Calculate } from '../common/calculate';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

describe('LinearRegression', () => {
  let service: LinearRegressionService;
  let linearRegression: LinearRegression = new LinearRegression();
  let calculate: Calculate = new Calculate();

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LinearRegressionService],
      imports: [HttpClientModule],
    });

    service = TestBed.inject(LinearRegressionService);
  });

  // Test para el test1.json
  it('should return B1 = 1.7279 with test1 json', () => {
    // Simula los datos de test1
    const test1Data = {
      proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
      actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601],
    };

    const lista1 = test1Data.proxy_size;
    const lista2 = test1Data.actual_added;

    const sumX = calculate.sumX(lista1);
    const sumY = calculate.sumX(lista2);
    //const mediaX = calculate.calculateMedia(lista1);
    //const mediaY = calculate.calculateMedia(lista2);

    const sumXY = calculate.sumXY(lista1, lista2);
    const sumXX = calculate.sumXX(lista1);
    //const sumYY = calculate.sumXX(lista2);
    const n = lista1.length;

    // Llama a la función calculateB1
    const result = linearRegression.calculateB1(sumXY, sumX, sumY, sumXX, n);

    // Comprueba que el resultado sea igual al valor esperado con una tolerancia
    expect(result).toBeCloseTo(1.7279, 4);
  });

  /*xit('should return B0 = -22.5525 with test1 json', () => {
    // Simula los datos de test1
    const test1Data = {
      proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
      actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601],
    };

    // Llama a la función calculateB0
    const result = linearRegression.calculateB0();

    // Comprueba que el resultado sea igual al valor esperado con una tolerancia
    expect(result).toBeCloseTo(-22.5525, 4);
  });

  xit('should return y = 644.429 if x = 386 with test1 json', () => {
    // Simula los datos de test1
    const test1Data = {
      proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
      actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601],
    };

    // Llama a la función calculateY
    const result = linearRegression.calculateY(386);

    // Comprueba que el resultado sea igual al valor esperado con una tolerancia
    expect(result).toBeCloseTo(644.429, 3);
  });

  // Test para el test2.json
  xit('should return B1 = 0.1681 with test2 JSON', () => {
    // Datos de prueba
    const testData = {
      proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
      actual_develop: [
        15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2,
      ],
    };

    // Llama a la función calculateB1
    const result = linearRegression.calculateB1();

    // Comprueba que el resultado sea igual al valor esperado con una tolerancia
    expect(result).toBeCloseTo(0.1681, 4);
  });

  xit('should return B0 = -4.039 with test2 JSON', () => {
    // Datos de prueba
    const testData = {
      proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
      actual_develop: [
        15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2,
      ],
    };

    // Llama a la función calculateB0
    const result = linearRegression.calculateB0();

    // Comprueba que el resultado sea igual al valor esperado con una tolerancia
    expect(result).toBeCloseTo(-4.039, 3);
  });

  xit('should return y = 60.858 if x = 386 with2 test JSON', () => {
    // Datos de prueba
    const testData = {
      proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
      actual_develop: [
        15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2,
      ],
    };

    // Llama a la función calculateY con un valor de X
    const result = linearRegression.calculateY(386);

    // Comprueba que el resultado sea igual al valor esperado con una tolerancia
    expect(result).toBeCloseTo(60.858, 3);
  });

  // Test para el test3.json
  xit('should return B1 = 1.43097 with test3 JSON', () => {
    // Datos de prueba
    const testData = {
      plan_added: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
      actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601],
    };

    // Llama a la función calculateB1
    const result = linearRegression.calculateB1();

    // Comprueba que el resultado sea igual al valor esperado con una tolerancia
    expect(result).toBeCloseTo(1.43097, 5);
  });

  xit('should return B0 = -23.92 with test3 JSON', () => {
    // Datos de prueba
    const testData = {
      plan_added: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
      actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601],
    };

    // Llama a la función calculateB0
    const result = linearRegression.calculateB0();

    // Comprueba que el resultado sea igual al valor esperado con una tolerancia
    expect(result).toBeCloseTo(-23.92, 2);
  });

  xit('should return y = 528.4294 if x = 386 with3 test JSON', () => {
    // Datos de prueba
    const testData = {
      plan_added: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
      actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601],
    };

    // Llama a la función calculateY con un valor de X
    const result = linearRegression.calculateY(386);

    // Comprueba que el resultado sea igual al valor esperado con una tolerancia
    expect(result).toBeCloseTo(528.4294, 4);
  });

  // Test para el test4.json
  xit('should return B1 = 0.140164 with test4 JSON', () => {
    // Datos de prueba
    const testData = {
      plan_added: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
      actual_develop: [
        15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2,
      ],
    };

    const result = linearRegression.calculateB1();

    // Comprueba que el resultado sea igual al valor esperado con una tolerancia
    expect(result).toBeCloseTo(0.140164, 6);
  });

  xit('should return B0 = -4.604 with test4 JSON', () => {
    // Datos de prueba
    const testData = {
      plan_added: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
      actual_develop: [
        15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2,
      ],
    };

    // Llama a la función calculateB0
    const result = linearRegression.calculateB0();

    // Comprueba que el resultado sea igual al valor esperado con una tolerancia
    expect(result).toBeCloseTo(-4.604, 3);
  });

  xit('should return y = 49.4994 if x = 386 with test4 JSON', () => {
    // Datos de prueba
    const testData = {
      plan_added: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
      actual_develop: [
        15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2,
      ],
    };

    // Llama a la función calculateY con un valor de X
    const result = linearRegression.calculateY(386);

    // Comprueba que el resultado sea igual al valor esperado con una tolerancia
    expect(result).toBeCloseTo(49.4994, 4);
  });*/
});
