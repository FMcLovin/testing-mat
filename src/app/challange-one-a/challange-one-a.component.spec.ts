import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ChallangeOneAComponent } from './challange-one-a.component';

describe('ChallangeOneAComponent', () => {
  let component: ChallangeOneAComponent;
  let fixture: ComponentFixture<ChallangeOneAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChallangeOneAComponent],
      imports: [HttpClientTestingModule],
    });
    fixture = TestBed.createComponent(ChallangeOneAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
