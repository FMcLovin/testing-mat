import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ChallangeOneAComponent } from './challange-one-a.component';
import { By } from '@angular/platform-browser';

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

  it('should call ngOnInit', () => {
    expect(component).toBeTruthy();
  });

  it('should set proxy data in data-test="proxy_size" list', () => {
    component.proxy = [
      160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503,
    ];

    fixture.detectChanges();

    const proxySizeElement = fixture.debugElement.query(By.css('[data-test="proxy_size"]'));

    expect(proxySizeElement).toBeTruthy();

    const proxySizeContent = proxySizeElement.nativeElement.textContent.trim();
    expect(proxySizeContent).toBe('160,591,114,229,230,270,128,1657,624,1503');
  });

  it('should set proxy data in data-test="dev_hours" list', () => {
    component.devHours = [
      15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2,
    ];

    fixture.detectChanges();

    const proxySizeElement = fixture.debugElement.query(By.css('[data-test="dev_hours"]'));

    expect(proxySizeElement).toBeTruthy();

    const proxySizeContent = proxySizeElement.nativeElement.textContent.trim();
    expect(proxySizeContent).toBe('15,69.9,6.5,22.4,28.4,65.9,19.4,198.7,38.8,138.2');
  });
  
  it('should call calculate on click calculate_btn', () => {
    component.proxy = [
      160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503,
    ];
    component.devHours = [
      15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2,
    ];

    fixture.detectChanges();

    let additionButton = fixture.debugElement.query(By.css('[data-test="calculate_btn"]'));
    // Act
    additionButton.triggerEventHandler('click', null);
    // Assert
    expect(component.mediaProxy).toBeCloseTo(550.6);
    expect(component.mediaHours).toBeCloseTo(60.32);

    expect(component.stddevProxy).toBeCloseTo(542.67);
    expect(component.stddevHours).toBeCloseTo(59.06);

  });

  it('should call getMedia method and calculate proxy media', () => {
    // Arrange
    let result = 0;
    component.proxy = [
      160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503,
    ];

    // Act
    result = component.getMedia(component.proxy);

    // Assert
    expect(result).toBeCloseTo(550.6);
  });

  it('should call getMedia method and calculate hours media', () => {
    // Arrange
    let result = 0;

    component.devHours = [
      15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2,
    ];

    // Act
    result = component.getMedia(component.devHours);

    // Assert
    expect(result).toBeCloseTo(60.32);
  });

  it('should call getStddev method and calculate proxy Stddev', () => {
    // Arrange
    let result = 0;
    component.proxy = [
      160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503,
    ];

    // Act
    result = component.getMedia(component.proxy);
    result = component.getStddev(component.proxy, result);

    // Assert
    expect(result).toBeCloseTo(542.67);
  });

  it('should call getStddev method and calculate hours Stddev', () => {
    // Arrange
    let result = 0;
    component.devHours = [
      15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2,
    ];

    // Act
    result = component.getMedia(component.devHours);
    result = component.getStddev(component.devHours, result);

    // Assert
    expect(result).toBeCloseTo(59.06);
  });

});
