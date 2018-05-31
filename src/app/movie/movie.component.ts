import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})

export class MovieComponent {

  @Input() movie: Movie = new Movie();

  constructor(private moviesService : MoviesService) { }

  ngOnInit() {
  }

}
