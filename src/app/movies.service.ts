import { Injectable } from '@angular/core';
import { Movie } from './movie'
import { BudgetComponent } from './budget/budget.component';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';


// const MOVIES = [
//   {id:0,img:"http://static.comicvine.com/uploads/original/10/104544/4068923-tarzan-wallpaper-walt-disneys-tarzan-6248938-1024-768.jpg",title:"Tarzan", price:3, year:1999, descrShort:"The movie is about the life of Tarzan. Tarzan was a small orphan who was raised by an ape named Kala since he was a child. He believed that this was his family, but on an expedition Jane Porter is rescued by Tarzan."},
//   {id:1,img:"http://cdn.collider.com/wp-content/uploads/2016/04/the-lion-king-image.jpg",title:"The Lion King", year:1994,price:2, descrShort:"A young lion Prince is cast out of his pride by his cruel uncle, who claims he killed his father. While the uncle rules with an iron paw, the prince grows up beyond the Savannah, living by a philosophy: No worries for the rest of your days."},
//   {id:2,img:"http://img.lum.dolimg.com/v1/images/characters_beautyandthebeast_belle_852af5fe.jpeg?region=0,0,1536,788&width=1200",price:3,title:"Beauty and the Beast", year:1991, descrShort:"A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love."},
//   {id:3,img:"http://cdn1.thr.com/sites/default/files/imagecache/scale_crop_768_433/2015/07/sword_in_the_stone_still.jpg",title:"The Sword in the Stone",price:6, year:1963, descrShort:"Arthur (aka Wart) is a young boy who aspires to be a knight's squire. On a hunting trip he falls in on Merlin, a powerful but amnesiac wizard who has plans for Wart beyond mere squiredom."},
//   {id:4,img:"https://conexioncapital.co/wp-content/uploads/2017/04/el-padrino-1.jpg",title:"The Godfather",year: 1972,price:3, descrShort:"Francis Ford Coppola's epic features Marlon Brando in his Oscar-winning role as the patriarch of the Corleone family. Director Coppola paints a chilling portrait of the Sicilian clan's rise and near fall from power in America."},
//   {id:5,img:"https://images-na.ssl-images-amazon.com/images/I/51mimf%2B1QKL._SX323_BO1,204,203,200_.jpg",title:"Schindler's List",year: 1993,price: 4, descrShort: "Steven Spielberg's epic drama tells the compelling true story of German businessman Oskar Schindler (Neeson) who comes to Nazi-occupied Poland looking for economic prosperity and leaves as a savior."}
// ]

@Injectable()

export class MoviesService {

  private  moviesUrl = 'https://anguflix-api.herokuapp.com/api/movies';

  constructor(private http: HttpClient ) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesUrl);
  } 

  getMovie(id: number): Observable<Movie[]> {
    let movie = this.moviesUrl + '/' + id;
    return this.http.get<Movie[]>(movie);
  }

}
