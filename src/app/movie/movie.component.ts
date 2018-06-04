import { Component, OnInit, Input,  Output, EventEmitter } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})

export class MovieComponent {

  @Input() movie: Movie = new Movie();
  @Output() addToMy: EventEmitter<Movie> = new EventEmitter();
  @Input() removeButton: boolean;
  @Output() removeFromMy: EventEmitter<Movie> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  
  clickMovie(movie: Movie) {
    this.addToMy.emit(movie);
  }

  removeMovie(movie: Movie) {
    this.removeFromMy.emit(movie);
  }

}
