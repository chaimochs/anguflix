import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { UserService } from '../user.service';
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

  constructor(private moviesService : MoviesService, private userService : UserService) { 
    this.mymovies = this.userService.MYMOVIES;
  }

  ngOnInit() {
   
  }
  
  search(letters: string) {
    this.searchText = letters;
  }

remove(movie) {
  this.userService.removeMovie(movie);
  if(this.userService.MYMOVIES.length === 0){this.removeButton = false;}
  }

  get budgetState() {
    return this.userService.getBudgetState();
  }

  toggleRemovable() {
  this.removeButton = !this.removeButton;
  }
}
