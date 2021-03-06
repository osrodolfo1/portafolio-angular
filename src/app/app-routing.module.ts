import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { AboutComponent } from "./paginas/about/about.component";
import { ItemComponent } from "./paginas/item/item.component";
import { PortafolioComponent } from "./paginas/portafolio/portafolio.component";
import { SearchComponent } from "./paginas/search/search.component";

const app_routes: Routes=[
  {path: 'home',component: PortafolioComponent},
  {path: 'about',component: AboutComponent},
  {path: 'item/:idProd',component: ItemComponent},
  {path: 'search/:termino',component: SearchComponent},
  {path: '**',pathMatch:'full', redirectTo:'home' }
];


@NgModule ({
  imports:[
    RouterModule.forRoot(app_routes,{useHash:true})
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule{

}