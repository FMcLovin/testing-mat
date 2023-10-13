import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StddevComponent } from './stddev.component';
import { HttpClientModule } from '@angular/common/http';
import { MediaService } from '../service/media.service'; // Importa tu servicio real
import { of } from 'rxjs';


describe('StddevComponent', () => {
  let component: StddevComponent;
  let fixture: ComponentFixture<StddevComponent>;
  let mediaService: MediaService; // Declara una variable para el servicio

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StddevComponent],
      imports: [HttpClientModule],
      providers: [MediaService], // Proporciona el servicio en la prueba
    });

    fixture = TestBed.createComponent(StddevComponent);
    component = fixture.componentInstance;
    mediaService = TestBed.inject(MediaService); // Inyecta el servicio
    fixture.detectChanges();
  });

  it('should return stddev 572.03', () => {
    // Simula la respuesta del servicio para getMedia()
    spyOn(mediaService, 'getMedia').and.returnValue(of({ data: [572.03] }));

    component.ngOnInit();

    expect(component.mediaProxy).toEqual(572.03);
  });

  it('should return stddev 62.26', () => {
    // Simula la respuesta del servicio para getHours()
    spyOn(mediaService, 'getHours').and.returnValue(of({ data: [62.26] }));

    component.ngOnInit();

    expect(component.mediaHours).toEqual(62.26);
  });
});

