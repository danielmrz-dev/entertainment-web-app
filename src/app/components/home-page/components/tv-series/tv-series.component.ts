import { Component, inject } from '@angular/core';
import { IMedia } from '../../../../models/media/media.interface';
import { MoviesAndSeriesService } from '../../../../services/movies-and-series.service';

@Component({
  selector: 'app-tv-series',
  templateUrl: './tv-series.component.html',
  styleUrl: './tv-series.component.scss'
})
export class TvSeriesComponent {
    tvSeries: IMedia[] = [];
    filteredTVSeries: IMedia[] = [];
    filteredTitle: string = '';
    thereAreFilteredTVSeries: boolean = false;
  
    private readonly _moviesAndSeriesService = inject(MoviesAndSeriesService);
  
    ngOnInit(): void {
      this._moviesAndSeriesService.mediaList$.subscribe((mediaList) => {
        this.tvSeries = mediaList.filter((media) => media.category === 'TV Series');
      })
    }

    filterTVSeries(searchTerm: string) {
      if (searchTerm.length <= 0) {
        this.thereAreFilteredTVSeries = false;
      } else {
        this.thereAreFilteredTVSeries = true;
        this.filteredTVSeries = this.tvSeries.filter((movie) => movie.title.toLowerCase().includes(searchTerm.toLowerCase()))
        this.filteredTitle = `Found ${this.filteredTVSeries.length} results for '${searchTerm}'`
      }
    }
}
