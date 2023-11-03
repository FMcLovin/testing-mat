import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TDistributionComponent } from './t-distribution.component';

describe('TDistributionComponent', () => {
  let component: TDistributionComponent;
  let fixture: ComponentFixture<TDistributionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TDistributionComponent],
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

});
