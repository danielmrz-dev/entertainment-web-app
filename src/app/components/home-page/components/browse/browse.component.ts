import { Component, AfterViewInit, ViewChild, ElementRef, inject, OnInit } from '@angular/core';
import { IBreakpoint } from '../../../../models/breakpoint.interface';
import { MoviesAndSeriesService } from '../../../../services/movies-and-series.service';
import { IMedia } from '../../../../models/media/media.interface';
import { generateBreakpoints } from '../../../../utils/generate-breakpoints';
import { ISwiperConfig } from '../../../../models/swiper-config.interface';
import { initializeSwiper } from '../../../../utils/initialize-swiper';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit, AfterViewInit {
  
  @ViewChild('swiper') swiperElement!: ElementRef;

  trending: IMedia[] = [];
  moviesAndSeries: IMedia[] = [];
  filtered: IMedia[] = [];
  filteredTitle: string = '';
  thereAreFilteredItems: boolean = false;
  swiperConfig: ISwiperConfig = {
    slidesPerView: 2,
    spaceBetween: 160,
    breakpoints: generateBreakpoints(),
  };

  private readonly _moviesAndSeriesService = inject(MoviesAndSeriesService);

  ngOnInit(): void {
    this._moviesAndSeriesService.mediaList$.subscribe({
      next: (mediaList) => {
        this.trending = mediaList.filter(media => media.isTrending);
        this.moviesAndSeries = mediaList;
      }
    })
  }
  
  ngAfterViewInit() {
    initializeSwiper(this.swiperElement, this.swiperConfig);
  }

  filterMoviesAndSeries(term: string) {
    if (term.length <= 0) {
      this.thereAreFilteredItems = false;
      setTimeout(() => {
        initializeSwiper(this.swiperElement, this.swiperConfig)
      });
    } else {
      this.thereAreFilteredItems = true;
      this.filtered = this.moviesAndSeries.filter(
        media => media.title.toLowerCase().includes(term.toLowerCase())
      )
      this.filteredTitle = `Found ${this.filtered.length} results for '${term}'`
    }
    
  }

}

