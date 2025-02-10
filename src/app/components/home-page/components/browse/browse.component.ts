import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements AfterViewInit {

  bps: {[key: number]: { [key: string]: number }} = {}
  @ViewChild('swiper', { static: false }) swiperElement?: ElementRef;

  swiperConfig = {
    slidesPerView: 2,
    spaceBetween: 160,
    breakpoints: this.bps

    //   375: { slidesPerView: 2 },
    //   425: { slidesPerView: 2.2 },
    //   475: { slidesPerView: 2.4 },
    //   525: { slidesPerView: 2.6 },
    //   575: { slidesPerView: 2.8 },
    //   625: { slidesPerView: 3 },
    //   675: { slidesPerView: 3.2 },
    //   725: { slidesPerView: 3.4 },
    //   775: { slidesPerView: 3.6 },
    //   825: { slidesPerView: 3.8 },
    //   875: { slidesPerView: 4 },
    //   925: { slidesPerView: 4.2 },
    //   975: { slidesPerView: 4.4 },
    //   1025: { slidesPerView: 4.6 },
    //   1075: { slidesPerView: 4.8 },
    //   1125: { slidesPerView: 5 },
    //   1175: { slidesPerView: 5.2 },
    //   1225: { slidesPerView: 5.4 },
    //   1275: { slidesPerView: 5.6 },
    //   1325: { slidesPerView: 5.8 },
    //   1375: { slidesPerView: 6 },
    //   1425: { slidesPerView: 6.2 },
    //   1440: { slidesPerView: 6.4 },
    // },
  };

  ngAfterViewInit() {
    if (this.swiperElement) {
      Object.assign(this.swiperElement.nativeElement, this.swiperConfig);
      this.swiperElement.nativeElement.initialize();
    }
  }
  
  ngOnInit(): void {
    let breakpoints: {[key: number]: { [key: string]: number }} = {};
    let slidesPerView = 2;
    for (let i = 375; i < 1440; i = i + 25) {
      breakpoints = {
        [i]: { slidesPerView: slidesPerView }
      }
      slidesPerView = (slidesPerView + 0.2);
    }
    this.bps = breakpoints;  
    console.log(this.bps);    
  }

}
