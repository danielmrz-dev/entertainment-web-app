import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { IBreakpoint } from '../../../../models/breakpoint.interface';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements AfterViewInit {
  
  @ViewChild('swiper', { static: false }) swiperElement?: ElementRef;

  swiperConfig = {
    slidesPerView: 2,
    spaceBetween: 160,
    breakpoints: this.generateBreakpoints(),
  };

  ngAfterViewInit() {
    if (this.swiperElement) {
      Object.assign(this.swiperElement.nativeElement, this.swiperConfig);
      this.swiperElement.nativeElement.initialize();
    }
  }

  private generateBreakpoints(): { [key: number]: { slidesPerView: number } } {
    const breakpoints: IBreakpoint = {};
    let slidesPerView = 2;
    for (let i = 375; i <= 1440; i += 50) {
      breakpoints[i] = { slidesPerView };
      slidesPerView = Number((slidesPerView + 0.2).toFixed(1));
    }
    return breakpoints;
  }

}

