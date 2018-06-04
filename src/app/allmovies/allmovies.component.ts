import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../movie';
import { timeout } from 'q';

@Component({
  selector: 'app-allmovies',
  templateUrl: './allmovies.component.html',
  styleUrls: ['./allmovies.component.scss']
})

export class AllmoviesComponent {
  budgetStatus: string = '';
  movies: Movie[];
  searchText: string;

  constructor(private moviesService : MoviesService) { 
  this.movies = moviesService.getMovies();
}

  ngOnInit() {
  }
  
  search(letters: string) {
    this.searchText = letters;
  }
   

  buy(movie){
    if(this.moviesService.myuser.budget >= movie.price){ 
      this.moviesService.moveMovie(movie);
      this.moviesService.subtractfromBudget(movie.price);
    }
  }

}
