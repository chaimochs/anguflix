import { Component, OnInit, OnChanges, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {
  @Output() searchChanged: EventEmitter<string> = new EventEmitter();

  searchText: string;

  constructor() { }

  ngOnInit() {
   }

 searchTitle() {
    this.searchChanged.emit(this.searchText);
  }
    
}
