import { Component, Input } from '@angular/core';
import { IMedia } from '../../models/media/media.interface';

@Component({
  selector: 'app-trending-card',
  templateUrl: './trending-card.component.html',
  styleUrl: './trending-card.component.scss'
})
export class TrendingCardComponent {

  @Input({ required: true }) media: IMedia = {} as IMedia;

}
