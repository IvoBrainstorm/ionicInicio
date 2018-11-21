
import { Injectable } from '@angular/core';


let congi_key_name = "config";

@Injectable()
export class ConfigProvider {

  private config = {
    showSlide: false,
    username: "",
    name: ""
  }

  constructor() {

  }

  //Recuperar dados do local estorage
  getCongigData(): any {

    return localStorage.getItem(congi_key_name);

  }

  //Gravar dados do local storage
  setConfigData(showSlide?: boolean, name?: string, username?: string) {
    let config = {
      showSlide: false,
      username: "",
      name: ""
    }

    if (showSlide) {
      config.showSlide = showSlide;
    }

    if (name) {
      config.name = name;
    }

    if (username) {
      config.username = username;
    }

    localStorage.setItem(congi_key_name, JSON.stringify(config));
  }
}
