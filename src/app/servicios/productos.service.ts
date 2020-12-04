import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductoInterface } from '../interfaces/producto.interface';

@Injectable()
export class ProductosService {

  cargando = true;
  productos: ProductoInterface[]=[];
  productosFiltrado:ProductoInterface[]=[];

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos(){
    return new Promise((resolve,reject)=>{
      this.http.get('https://angular-html-eb4d6.firebaseio.com/productos_idx.json')
      .subscribe((resp:ProductoInterface[]) => {
        this.productos = resp;
        this.cargando = false;
        resolve();
      });
    });
    
  }

  getProducto(id:string){
    return this.http.get(`https://angular-html-eb4d6.firebaseio.com/productos/${id}.json`)
     
  }

  buscarProducto(termino:string){
    if(this.productos.length==0){
      //cargar productos
      this.cargarProductos().then(()=>{
        //aplicar filtro
        this.aplicarFiltro(termino);
      });
    }
    else{
      //aplicar filtro
      this.aplicarFiltro(termino);
    }    
  }

  private aplicarFiltro(termino:string){
    termino = termino.toLocaleLowerCase();
    this.productosFiltrado=[];
    this.productos.forEach(prod=>{
      const tituloLower= prod.titulo.toLocaleLowerCase();
      if(prod.categoria.indexOf(termino)>=0 || tituloLower.indexOf(termino)>=0){
        this.productosFiltrado.push(prod);
      }
    })
  }
}
