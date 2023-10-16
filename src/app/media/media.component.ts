import { Component, OnInit } from '@angular/core';
import { MediaService } from '../service/media.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {
  constructor(private mediaService: MediaService) {
  }

  proxy: number[] = [];
  devHours: number[] = [];

  mediaProxy: number = 0;
  mediaHours: number = 0;

  ngOnInit(): void {

    this.mediaService.getMedia()
    .subscribe( (data: any) => {
      this.proxy = data.data
      this.mediaProxy = this.mediaService.getMediaProxy(this.proxy);
    })

    this.mediaService.getHours()
    .subscribe( (data: any) => {
      this.devHours = data.data
      this.mediaHours = this.mediaService.getMediaHours(this.devHours);
    })
  }
  
}
