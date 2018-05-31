import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-mymovies',
  templateUrl: './mymovies.component.html',
  styleUrls: ['./mymovies.component.scss']
})
export class MymoviesComponent implements OnInit {

  mymovies: Array<Movie> = new Array<Movie>();

  constructor(private moviesService : MoviesService) { 
    this.mymovies = moviesService.getMyMovies();
  }

  ngOnInit() {
  }

remove(movie, idx){
  this.moviesService.removeMovie(movie, idx);
}

}
