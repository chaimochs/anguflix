import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { User } from '../user';


@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})

  export class BudgetComponent implements OnInit {
  
     user : User = new User();

  constructor(private moviesService : MoviesService) {
    this.user = moviesService.myuser;
   }

  ngOnInit() {
  }

  
}
