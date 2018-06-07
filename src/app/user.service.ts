import { Injectable } from '@angular/core';
import { Movie } from './movie'
import { BudgetComponent } from './budget/budget.component';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MoviesService } from './movies.service';

@Injectable({
  providedIn: 'root'
})

  export class UserService {

  MYMOVIES: Movie[] = [];
  budgetState: string;
  myuser: User = new User();

  constructor(private moviesService : MoviesService) {
    this.myuser.budget = 100;
  }

  getMovies(): Movie[] {    
    return this.MYMOVIES;
  }
  
  moveMovie(movie: Movie) {
    if(this.myuser.budget >= movie.price  && this.isNewMovie(movie.title) ){
    this.MYMOVIES.push(movie);
    this.subtractfromBudget(movie.price);
    this.budgetState = ``;
    } else if (this.myuser.budget > 0 && this.myuser.budget < movie.price) {
      this.budgetState = `You don't have enough money, you only have $${this.myuser.budget} left`;
    } else if (this.myuser.budget >= movie.price && (!this.isNewMovie(movie.title))) {
      this.budgetState = `${movie.title} is already on your collection`;
    } else {
        this.budgetState = `You can't purchase ${movie.title}, your budget is empty`;
      }
    }

  getBudgetState(): string {
    return this.budgetState;
  }

  isNewMovie(title: string) {
    for(let flix of this.MYMOVIES) {
      if (title == flix.title) {
        return false;
      }
     } return true;
  }

  removeMovie(movie) {
    console.log(this.MYMOVIES)
    let index = this.MYMOVIES.findIndex(m => m.title == movie.title);
    console.log(index);
    this.MYMOVIES.splice(index, 1);
    console.log(this.MYMOVIES);
    this.addtoBudget(movie.price);
  }

  addtoBudget(price: number) {
    this.myuser.budget += price;
  }

  subtractfromBudget(price: number) {
    this.myuser.budget -= price;
  }

}
