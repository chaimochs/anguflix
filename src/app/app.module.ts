import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AllmoviesComponent } from './allmovies/allmovies.component';
import { MymoviesComponent } from './mymovies/mymovies.component';
import { MovieComponent } from './movie/movie.component'
import { FormsModule } from '@angular/forms';
import { MoviesService } from './movies.service';
import { BudgetComponent } from './budget/budget.component';
import { SearchComponent } from './search/search.component';
import { FilterPipe } from './filter.pipe';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AllmoviesComponent,
    MymoviesComponent,
    MovieComponent,
    FilterPipe,
    BudgetComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule    
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
