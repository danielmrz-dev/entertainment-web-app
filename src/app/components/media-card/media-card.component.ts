import { Component, inject, Input } from '@angular/core';
import { IMedia } from '../../models/media/media.interface';
import { MoviesAndSeriesService } from '../../services/movies-and-series.service';

@Component({
  selector: 'app-media-card',
  templateUrl: './media-card.component.html',
  styleUrl: './media-card.component.scss'
})
export class MediaCardComponent {
  @Input({ required: true }) media: IMedia = {} as IMedia;

  private readonly mediasService = inject(MoviesAndSeriesService);

  bookmark(media: IMedia) {
    media.isBookmarked = !media.isBookmarked;
    if (media.isBookmarked) {
      this.mediasService.addBookmarked(media);      
    } else {
      this.mediasService.removeBookmarked(media);
    }
    console.log(this.mediasService.bookmarked);
    
  }
}
