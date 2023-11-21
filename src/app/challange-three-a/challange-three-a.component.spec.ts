import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ChallangeThreeAComponent } from './challange-three-a.component';
import { By } from '@angular/platform-browser';

describe('ChallangeThreeAComponent', () => {
  let component: ChallangeThreeAComponent;
  let fixture: ComponentFixture<ChallangeThreeAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChallangeThreeAComponent],
      imports: [HttpClientTestingModule],
    });
    fixture = TestBed.createComponent(ChallangeThreeAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set proxy data in data-test="proxy_size" and actual added in data-test="actual_added" list', () => {
    component.lista1 = [
      130, 650, 99, 150, 128, 302, 95, 945, 368, 961
    ];

    component.lista2 = [
      186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601
    ];

    fixture.detectChanges();

    const proxySizeElement = fixture.debugElement.query(By.css('[data-test="proxy_size"]'));
    const actualAddedElement = fixture.debugElement.query(By.css('[data-test="actual_added"]'));

    expect(proxySizeElement).toBeTruthy();
    expect(actualAddedElement).toBeTruthy();

    const proxySizeContent = proxySizeElement.nativeElement.textContent.trim();
    const actualAddedContent = actualAddedElement.nativeElement.textContent.trim();

    expect(proxySizeContent).toBe('130,650,99,150,128,302,95,945,368,961');
    expect(actualAddedContent).toBe('186,699,132,272,291,331,199,1890,788,1601');
  });

  it('should set x value in data-test="x"', () => {
    fixture.detectChanges();

    const xElement = fixture.debugElement.query(By.css('[data-test="x"]'));

    expect(xElement).toBeTruthy();

    const xContent = xElement.nativeElement.textContent.trim();

    expect(xContent).toBe('386');
  });

  it('should set answers in front on button click', () => {

    component.lista1 = [
      130, 650, 99, 150, 128, 302, 95, 945, 368, 961
    ];

    component.lista2 = [
      186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601
    ];

    component.handleDataResponse();
    let additionButton = fixture.debugElement.query(By.css('[data-test="calculate_btn"]'));
    // Act
    additionButton.triggerEventHandler('click', null);

    fixture.detectChanges();

    const b0Element = fixture.debugElement.query(By.css('[data-test="b0"]'));
    const b1Element = fixture.debugElement.query(By.css('[data-test="b1"]'));
    const yElement = fixture.debugElement.query(By.css('[data-test="y"]'));

    const rElement = fixture.debugElement.query(By.css('[data-test="r"]'));
    const rrElement = fixture.debugElement.query(By.css('[data-test="rr"]'));

    expect(b0Element).toBeTruthy();
    expect(b1Element).toBeTruthy();
    expect(yElement).toBeTruthy();
    expect(rElement).toBeTruthy();
    expect(rrElement).toBeTruthy();

    const b0Content = b0Element.nativeElement.textContent.trim();
    const b1Content = b1Element.nativeElement.textContent.trim();
    const yContent = yElement.nativeElement.textContent.trim();
    const rContent = rElement.nativeElement.textContent.trim();
    const rrContent = rrElement.nativeElement.textContent.trim();

    expect(b0Content).toBe('-22.55253275203422');
    expect(b1Content).toBe('1.727932426206986');
    expect(yContent).toBe('644.4293837638623');
    expect(rContent).toBe('0.9544965741046826');
    expect(rrContent).toBe('0.9110637099775758');
  });
});
