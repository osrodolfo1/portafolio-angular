import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';

//Rutas
import { AppRoutingModule } from './app-routing.module';
//Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PortafolioComponent } from './paginas/portafolio/portafolio.component';
import { AboutComponent } from './paginas/about/about.component';
import { ItemComponent } from './paginas/item/item.component';

//Servicios
import { InfoPaginaService } from './servicios/info-pagina.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [InfoPaginaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
