import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { FilmeDetalhesPage } from '../filme-detalhes/filme-detalhes';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {
  public object_usuario = {
    titulo: "Ivo Matavele",
    data: "November 5, 1955",
    descricao: "Estou a ver se aprendo essa linguagem que até então me parece interessante. Vai ser incrivel...",
    qnt_likes: 12,
    qnt_comments: 4,
    time_comment: 11
  }

  public list_filmes = new Array<any>();
  public loader;

  public refresher;
  public isRefreshing: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private moovieProvider: MovieProvider,
    public loadingCtrl: LoadingController) {
  }


  //Funcao que que gera o processamento
  presentLoading() {

    this.loader = this.loadingCtrl.create({
      content: "Loading Movies...",
    
    });
    this.loader.present();
  }

  //Funcao para fechar o carregamento
  closeLoading(){
    this.loader.dismiss();
  }

 //Funcao para fazeer o refresh das paginas
 doRefresh(refresher) {
  this.refresher = refresher;
  this.isRefreshing = true;
  this.carregarFilmes();
}

  ionViewDidEnter() {
    this.carregarFilmes();
  }

  abrirDetalhes(filme){
    this.navCtrl.push(FilmeDetalhesPage, { id: filme.id});
  }





  carregarFilmes(){
        //Mostrar o carregamnto da pagina
        this.presentLoading();


        console.log('ionViewDidLoad FeedPage');
        this.moovieProvider.getLatestMovie().subscribe(
          data=>{
            
            const objecto_retorno = data;
            
            this.list_filmes = objecto_retorno.results;
            console.log(objecto_retorno);
            
            //Fechar o Carregamento da pagina, logo apos o carregamento
            this.closeLoading();
    
            if(this.isRefreshing){
              this.refresher.complete();
              this.isRefreshing = false;
            }
          },error=>{
            console.log(error);
            //Fechar a pagina depois de nao conseguir carregar
            this.closeLoading();
    
            if(this.isRefreshing){
              this.refresher.complete();
              this.isRefreshing = false;
            }
          }
        )
  }

}
