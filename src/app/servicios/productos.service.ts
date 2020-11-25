import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductoInterface } from '../interfaces/producto.interface';

@Injectable()
export class ProductosService {

  cargando = true;
  productos: ProductoInterface[]=[];

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos(){
    this.http.get('https://angular-html-eb4d6.firebaseio.com/productos_idx.json')
      .subscribe((resp:ProductoInterface[]) => {
        console.log(resp);
        this.productos = resp;
        this.cargando = false;
      })
  }
}
