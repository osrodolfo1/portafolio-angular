import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../servicios/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    public servicio: ProductosService) { }

  ngOnInit() {
    this.route.params
      .subscribe(params =>{
        this.servicio.buscarProducto(params.termino);
    })
  }

}
