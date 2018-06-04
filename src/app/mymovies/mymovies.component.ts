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
  clicked: boolean = false;
  removeButton: boolean;
  searchText: string;

  constructor(private moviesService : MoviesService) { 
    this.mymovies = moviesService.getMyMovies();
  }

  ngOnInit() {
   
  }
  
  search(letters: string) {
    this.searchText = letters;
  }

remove(movie) {
  this.moviesService.removeMovie(movie);
  this.moviesService.addtoBudget(movie.price);
  if(this.mymovies.length === 0){this.removeButton = false;}
  }

  toggleRemovable() {
  this.removeButton = !this.removeButton;
  }
}
