import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable()

export class InfoPaginaService {

  info: InfoPagina={};
  cargada = false;
  constructor(private http:HttpClient) {
    console.log("servicio activo!!");
    this.http.get('assets/data/data-pagina.json')
      .subscribe(resp => {
        console.log(resp);
        this.cargada = true;
        this.info = resp;
      })
   }

}
