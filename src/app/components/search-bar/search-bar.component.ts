import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  searchTerm: string = '';

  @Output() emitSearchTerm = new EventEmitter<string>();

  sendSearchTerm() {
    this.emitSearchTerm.emit(this.searchTerm);
  }
}
