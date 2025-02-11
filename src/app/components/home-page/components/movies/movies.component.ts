import { Component, inject, OnInit } from '@angular/core';
import { IMedia } from '../../../../models/media/media.interface';
import { MoviesAndSeriesService } from '../../../../services/movies-and-series.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent implements OnInit {

  movies: IMedia[] = [];
  filteredMovies: IMedia[] = [];
  filteredTitle: string = '';
  thereAreFilteredMovies: boolean = false;

  private readonly _moviesAndSeriesService = inject(MoviesAndSeriesService);

  ngOnInit(): void {
    this._moviesAndSeriesService.mediaList$.subscribe((mediaList) => {
      this.movies = mediaList.filter((media) => media.category === 'Movie');
    })
  }


  filterMovies(searchTerm: string) {
    if (searchTerm.length <= 0) {
      this.thereAreFilteredMovies = false;
    } else {
      this.thereAreFilteredMovies = true;
      this.filteredMovies = this.movies.filter((movie) => movie.title.toLowerCase().includes(searchTerm.toLowerCase()))
      this.filteredTitle = `Found ${this.filteredMovies.length} results for '${searchTerm}'`
    }
  }
}
