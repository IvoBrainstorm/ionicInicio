import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  private baseApiPath = "https://api.themoviedb.org/3";

  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  }

  getLatestMovie():Observable<any>{
    return this.http.get(this.baseApiPath + "/movie/popular?api_key=ae4f6959456406248b676873f61a3025");
  }

  gettMovieDetails(filmeid){
    return this.http.get(this.baseApiPath + '/movie/${filmeid}?api_key=ae4f6959456406248b676873f61a3025');
  }
}
