import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TDistributionComponent } from './t-distribution.component';
import { By } from '@angular/platform-browser';

describe('TDistributionComponent', () => {
  let component: TDistributionComponent;
  let fixture: ComponentFixture<TDistributionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TDistributionComponent],
      imports: [FormsModule],
    });
    fixture = TestBed.createComponent(TDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Shouls return 0.35006 if x0=0, x1=1.1, dof=9, num_seg=20, ERROR=0.00001', () => {
    expect(component.tDistribution(0, 1.1, 9, 20, 0.00001)).toBeCloseTo(0.35006);
  });

  it('Shouls return 0.36757 if x0=0, x1=1.1812, dof=20, num_seg=20, ERROR=0.00001', () => {
    expect(component.tDistribution(0, 1.1812, 10, 20, 0.00001)).toBeCloseTo(0.36757);
  });

  it('Shouls return 0.49500 if x0=0, x1=2.750, dof=30, num_seg=20, ERROR=0.00001', () => {
    expect(component.tDistribution(0, 2.750, 30, 20, 0.00001)).toBeCloseTo(0.49500);
  });

  it('Should set x0 model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="x0"]')).nativeElement;

    // Act 
    inputElement.value = '0';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.x0).toEqual(0);
  });

  it('Should set x1 model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="x1"]')).nativeElement;

    // Act 
    inputElement.value = '1.1';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.x1).toEqual(1.1);
  });

  it('Should set degreesOfFreedom model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="degreesOfFreedom"]')).nativeElement;

    // Act 
    inputElement.value = '9';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.degreesOfFreedom).toEqual(9);
  });

  it('Should set numSegments model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="numSegments"]')).nativeElement;

    // Act 
    inputElement.value = '20';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.numSegments).toEqual(20);
  });

  it('Should set error model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="error"]')).nativeElement;

    // Act 
    inputElement.value = '0.00001';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.error).toEqual(0.00001);
  });

  it('Shouls calculate T student on button click', () => {
    component.x0 = 0;
    component.x1 = 1.1;
    component.degreesOfFreedom = 9;
    component.numSegments = 20;
    component.error = 0.00001;

    let additionButton = fixture.debugElement.query(By.css('[data-test="calculate_btn"]'));
    // Act
    additionButton.triggerEventHandler('click', null);

    fixture.detectChanges();

    expect(component.tStudent).toBeCloseTo(0.35006);
  });

});
