import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sections-title',
  templateUrl: './sections-title.component.html',
  styleUrl: './sections-title.component.scss'
})
export class SectionsTitleComponent {
  @Input({ required: true}) title: string = '';
}
