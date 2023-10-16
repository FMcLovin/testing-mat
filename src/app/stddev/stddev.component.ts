import { Component, OnInit } from '@angular/core';
import { MediaService } from '../service/media.service';

@Component({
  selector: 'app-stddev',
  templateUrl: './stddev.component.html',
  styleUrls: ['./stddev.component.css']
})
export class StddevComponent implements OnInit {

  constructor(private mediaService: MediaService) {}

  proxy: number[] = [];

  mediaProxy: number = 0;
  mediaHours: number = 0;

  devHours: number[] = [];

  desviacionEstandarProxy: number = 0;
  desviacionEstandarHour: number = 0;

  ngOnInit(): void {

    this.mediaService.getMedia()
    .subscribe( (data: any) => {
      this.proxy = data.data

      this.mediaProxy = this.mediaService.getMediaProxy(this.proxy);

      this.desviacionEstandarProxy = this.getDesvProxy(this.proxy, this.mediaProxy);
    })

    this.mediaService.getHours()
    .subscribe( (data: any) => {
      this.devHours = data.data

      this.mediaHours = this.mediaService.getMediaHours(this.devHours);

      this.desviacionEstandarHour = this.getDesvHours(this.devHours, this.mediaHours); 
    })
  }

   // MARK: 

   getDesvProxy(proxy: number[], mediaProxy: number): number {
    // Calcular la desviación estándar
    var sumaDiferenciasAlCuadrado = 0;
  
    for (let index = 0; index < proxy.length; index++) {
      sumaDiferenciasAlCuadrado += Math.pow(proxy[index] - mediaProxy, 2);
    }
  
    return Math.sqrt(sumaDiferenciasAlCuadrado / proxy.length);
  }
  
  getDesvHours(devHours: number[], mediaHours: number): number {
    // Calcular la desviación estándar
    var sumaDiferenciasAlCuadrado = 0;
  
    for (let index = 0; index < devHours.length; index++) {
      sumaDiferenciasAlCuadrado += Math.pow(devHours[index] - mediaHours, 2);
    }
  
    return Math.sqrt(sumaDiferenciasAlCuadrado / devHours.length);
  }
  
}