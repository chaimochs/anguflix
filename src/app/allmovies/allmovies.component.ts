import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-allmovies',
  templateUrl: './allmovies.component.html',
  styleUrls: ['./allmovies.component.scss']
})

export class AllmoviesComponent {
 
  movies: Array<Movie> = new Array<Movie>();
  mymovies: Array<Movie> = new Array<Movie>();

  constructor(private moviesService : MoviesService) { 
  this.movies = moviesService.getMovies();
  this.mymovies = moviesService.getMyMovies();
}

  ngOnInit() {
  }
  
  buy(movie, idx){
    this.moviesService.moveMovie(movie, idx);
  }

}
