import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../servicios/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _servicio:InfoPaginaService) { }

  ngOnInit() {
  }

}
