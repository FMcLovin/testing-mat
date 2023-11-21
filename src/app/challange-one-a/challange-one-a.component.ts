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
    
    this.mediaProxy = media(this.proxy);
    this.mediaHours = media(this.devHours);

    this.stddevProxy = stddev(this.proxy, this.mediaProxy);
    this.stddevHours = stddev(this.devHours, this.mediaHours);

    console.log(this.mediaProxy, this.mediaHours)
  }
}
