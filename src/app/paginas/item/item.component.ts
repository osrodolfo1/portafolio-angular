import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DescripcionProdInterface } from '../../interfaces/descripcionProd.interface';
import { ProductosService } from '../../servicios/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent implements OnInit {

  producto: DescripcionProdInterface={};
  id: string="";
  constructor(private route: ActivatedRoute,
    public servicio:ProductosService) { }

  ngOnInit() {
    this.route.params
      .subscribe(parametros =>{
        console.log("parameters",parametros);
        this.servicio.getProducto(parametros.idProd)
          .subscribe((producto:DescripcionProdInterface)=>{
            this.id=parametros.idProd;
            this.producto = producto;
            console.log("info",producto);
          });

      });
  }

}
