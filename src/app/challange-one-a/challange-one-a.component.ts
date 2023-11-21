import { Component, OnInit } from '@angular/core';
import { MediaService } from '../service/media.service';
import { media } from '../media/media';
import { stddev } from '../stddev/stddev';

@Component({
  selector: 'app-challange-one-a',
  templateUrl: './challange-one-a.component.html',
  styleUrls: ['./challange-one-a.component.css']
})
export class ChallangeOneAComponent implements OnInit {
  constructor(private mediaService: MediaService) {}

  proxy: number[] = [];
  devHours: number[] = [];

  mediaProxy: number = 0;
  mediaHours: number = 0;

  stddevProxy: number = 0;
  stddevHours: number = 0;

  ngOnInit(): void {

    this.mediaService.getMedia()
    .subscribe( (data: any) => {
      this.proxy = data.data
    })

    this.mediaService.getHours()
    .subscribe( (data: any) => {
      this.devHours = data.data
    })
    
  }

  calculate(): void {
    
    this.mediaProxy = this.getMedia(this.proxy);
    this.mediaHours = this.getMedia(this.devHours);

    this.stddevProxy = this.getStddev(this.proxy, this.mediaProxy);
    this.stddevHours = this.getStddev(this.devHours, this.mediaHours);

    console.log(this.mediaProxy, this.mediaHours)
  }

  getMedia(numbers: number[]): number {
    return media(numbers);
  }

  getStddev(numbers: number[], mean: number): number {
    return stddev(numbers, mean);
  }
}
