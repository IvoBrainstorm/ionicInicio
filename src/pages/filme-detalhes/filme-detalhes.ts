import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FilmeDetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filme-detalhes',
  templateUrl: 'filme-detalhes.html',
  providers:[
    MovieProvider
  ]
})
export class FilmeDetalhesPage {
  public filme;
  public filmeid;
  movieProvider: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, movieProvider: MovieProvider) {
  }

  ionViewDidEnter() {
    this.filmeid = this.navParams.get("id");
    this.movieProvider.getMovieDetails(this.filmeid.subscribe(data=>{
    this.filme = data;
    }

    ));
  }

}
