import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable()

export class InfoPaginaService {

  info: InfoPagina={};
  cargada = false;

  equipo: any[]=[];

  constructor(private http:HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo(){
    //Leer el archivo JSON
    console.log("servicio activo!!");
    this.http.get('assets/data/data-pagina.json')
      .subscribe(resp => {
        console.log(resp);
        this.cargada = true;
        this.info = resp;
      })
  }

  private cargarEquipo(){
    //Trae los datos de Firebase para cargarlos en el about
    this.http.get('https://angular-html-eb4d6.firebaseio.com/equipo.json')
      .subscribe((resp:any[]) => {
        console.log(resp);
        this.equipo = resp;
      })
  }
}
