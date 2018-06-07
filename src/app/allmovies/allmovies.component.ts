import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../movie';
import { timeout } from 'q';
import { UserService } from '../user.service';


@Component({
  selector: 'app-allmovies',
  templateUrl: './allmovies.component.html',
  styleUrls: ['./allmovies.component.scss']
})

export class AllmoviesComponent {
  budgetStatus: string = '';
  movies: Movie[];
  searchText: string;

  constructor(private userService : UserService, private moviesService: MoviesService) { 

  this.moviesService.getMovies().subscribe((data) => { 
    this.movies = data;
  });
}

  ngOnInit() {
  }
  
  search(letters: string) {
    this.searchText = letters;
  }
   

  buy(movie){
      this.userService.moveMovie(movie);
  }

}
