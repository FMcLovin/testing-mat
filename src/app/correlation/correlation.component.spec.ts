import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { CorrelationComponent } from './correlation.component';
import { LinearRegressionService } from '../service/linear-regression.service';
import { of } from 'rxjs';

describe('CorrelationComponent', () => {
  let component: CorrelationComponent;
  let service: LinearRegressionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorrelationComponent],
      providers: [LinearRegressionService],
      imports: [HttpClientModule],
    });

    component = TestBed.createComponent(CorrelationComponent).componentInstance;
    service = TestBed.inject(LinearRegressionService);
  });

  //Pruebas del test1
  xit('should return R = 0.9545 with test1 json', () => {
    // Simula los datos de test1
    const testData = {
      proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
      actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601],
    };

    spyOn(service, 'getTest1').and.returnValue(of(testData)); // Simula la llamada a getTest1

    component.fetchDataForRoute(1); // Llama al método para obtener los datos

    // Llama a la función calculateR
    const result = component.calculateR();

    // Comprueba que el resultado sea igual al valor esperado con una tolerancia
    expect(result).toBeCloseTo(0.9545, 4);
  });

  xit('should return RR = 0.9111 with test1 json', () => {
    // Simula los datos de test2
    const testData = {
      proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
      actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601],
    };

    spyOn(service, 'getTest1').and.returnValue(of(testData)); // Simula la llamada a getTest1

    component.fetchDataForRoute(1); // Llama al método para obtener los datos

    // Llama a la función calculateR
    const result = component.calculateRR();

    // Comprueba que el resultado sea igual al valor esperado con una tolerancia
    expect(result).toBeCloseTo(0.9111, 4);
  });

  //Pruebas del test2
  xit('should return R = 0.9333 with test2 json', () => {
    // Simula los datos de test1
    const testData = {
      proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
      actual_develop: [
        15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2,
      ],
    };

    spyOn(service, 'getTest2').and.returnValue(of(testData)); // Simula la llamada a getTest1

    component.fetchDataForRoute(2); // Llama al método para obtener los datos

    // Llama a la función calculateR
    const result = component.calculateR();

    // Comprueba que el resultado sea igual al valor esperado con una tolerancia
    expect(result).toBeCloseTo(0.9333, 4);
  });

  xit('should return RR = 0.8711 with test2 json', () => {
    // Simula los datos de test2
    const testData = {
      proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
      actual_develop: [
        15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2,
      ],
    };

    spyOn(service, 'getTest2').and.returnValue(of(testData)); // Simula la llamada a getTest1

    component.updateData(2); // Llama al método para obtener los datos

    // Llama a la función calculateR
    const result = component.calculateRR();

    // Comprueba que el resultado sea igual al valor esperado con una tolerancia
    expect(result).toBeCloseTo(0.8711, 4);
  });

  //Pruebas del test3
  xit('should return R = 0.9631 with test3 json', () => {
    // Simula los datos de tes3
    const testData = {
      plan_added: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
      actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601],
    };

    spyOn(service, 'getTest3').and.returnValue(of(testData)); // Simula la llamada a getTest1

    component.fetchDataForRoute(3); // Llama al método para obtener los datos

    // Llama a la función calculateR
    const result = component.calculateR();

    // Comprueba que el resultado sea igual al valor esperado con una tolerancia
    expect(result).toBeCloseTo(0.9631, 4);
  });

  xit('should return RR = 0.9276 with test3 json', () => {
    // Simula los datos de test3
    const testData = {
      plan_added: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
      actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601],
    };

    spyOn(service, 'getTest3').and.returnValue(of(testData)); // Simula la llamada a getTest1

    component.updateData(3); // Llama al método para obtener los datos

    // Llama a la función calculateR
    const result = component.calculateRR();

    // Comprueba que el resultado sea igual al valor esperado con una tolerancia
    expect(result).toBeCloseTo(0.9276, 4);
  });

  //Pruebas del test4
  xit('should return R = 0.9480 with test4 json', () => {
    // Simula los datos de tes4
    const testData = {
      plan_added: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
      actual_develop: [
        15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2,
      ],
    };

    spyOn(service, 'getTest4').and.returnValue(of(testData)); // Simula la llamada a getTest1

    component.fetchDataForRoute(4); // Llama al método para obtener los datos

    // Llama a la función calculateR
    const result = component.calculateR();

    // Comprueba que el resultado sea igual al valor esperado con una tolerancia
    expect(result).toBeCloseTo(0.948, 4);
  });

  xit('should return RR = 0.8988 with test4 json', () => {
    // Simula los datos de test4
    const testData = {
      plan_added: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
      actual_develop: [
        15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2,
      ],
    };

    spyOn(service, 'getTest4').and.returnValue(of(testData)); // Simula la llamada a getTest1

    component.updateData(4); // Llama al método para obtener los datos

    // Llama a la función calculateR
    const result = component.calculateRR();

    // Comprueba que el resultado sea igual al valor esperado con una tolerancia
    expect(result).toBeCloseTo(0.8988, 4);
  });
});
