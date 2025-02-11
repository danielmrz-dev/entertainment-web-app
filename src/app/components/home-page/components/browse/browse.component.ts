import { Component, AfterViewInit, ViewChild, ElementRef, inject } from '@angular/core';
import { IBreakpoint } from '../../../../models/breakpoint.interface';
import { MoviesAndSeriesService } from '../../../../services/movies-and-series.service';
import { Observable, of } from 'rxjs';
import { IMedia } from '../../../../models/media/media.interface';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements AfterViewInit {
  
  @ViewChild('swiper', { static: false }) swiperElement?: ElementRef;

  trending$: Observable<IMedia[]> = of();
  moviesAndSeries$: Observable<IMedia[]> = of();

  private readonly _moviesAndSeriesService = inject(MoviesAndSeriesService);

  swiperConfig = {
    slidesPerView: 2,
    spaceBetween: 160,
    breakpoints: this.generateBreakpoints(),
  };

  ngOnInit(): void {
    this.trending$ = this._moviesAndSeriesService.getTrending();
    this.moviesAndSeries$ = this._moviesAndSeriesService.getMedia();
  }

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

