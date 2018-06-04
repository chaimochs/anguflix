import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { MatToolbarModule} from '@angular/material/toolbar';
// import {MatInputModule} from '@angular/material/input';
//import {MatCardModule} from '@angular/material/card';
// import {MatButtonModule} from '@angular/material/button';
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
   // MatToolbarModule,
   // MatInputModule,
   // MatCardModule,
    FormsModule,
    // MatButtonModule,
    BrowserAnimationsModule,
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
