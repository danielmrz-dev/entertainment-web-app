import { Component, inject } from '@angular/core';
import { IMedia } from '../../../../models/media/media.interface';
import { MoviesAndSeriesService } from '../../../../services/movies-and-series.service';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrl: './bookmark.component.scss'
})
export class BookmarkComponent {
      bookmarked: IMedia[] = [];
      filteredBookmarked: IMedia[] = [];
      bookmarkedMovies: IMedia[] = [];
      bookmarkedTVSeries: IMedia[] = [];
      filteredTitle: string = '';
      thereAreFilteredBookmarked: boolean = false;
    
      private readonly _moviesAndSeriesService = inject(MoviesAndSeriesService);
    
      ngOnInit(): void {
        this._moviesAndSeriesService.bookmarkedItems$.subscribe((bookmarkedItems) => {
          this.bookmarked = bookmarkedItems.filter((media) => media.isBookmarked);
          this.bookmarkedMovies = this.bookmarked.filter((item) => item.category === 'Movie');
          this.bookmarkedTVSeries = this.bookmarked.filter((item) => item.category === 'TV Series');
        })
      }
  
      filterBookmarked(searchTerm: string) {
        if (searchTerm.length <= 0) {
          this.thereAreFilteredBookmarked = false;
        } else {
          this.thereAreFilteredBookmarked = true;
          this.filteredBookmarked = this.bookmarked.filter((movie) => movie.title.toLowerCase().includes(searchTerm.toLowerCase()))
          this.filteredTitle = `Found ${this.filteredBookmarked.length} results for '${searchTerm}'`
        }
      }
}
