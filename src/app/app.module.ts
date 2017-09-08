import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdivinaComponent } from './componentes/adivina/adivina.component';
import { FormsModule } from '@angular/forms';
import { AgilidadComponent } from './componentes/agilidad/agilidad.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { LoginComponent } from './componentes/login/login.component';
import { RouterModule, Router} from '@angular/router';

let miRuteo = [{path:'adivina',component:AdivinaComponent},
{path:'login',component:LoginComponent},
{path:'agilidad',component:AgilidadComponent},
{path:'menu',component:MenuComponent}] ;

@NgModule({
  declarations: [
    AppComponent,
    AdivinaComponent,
    AgilidadComponent,
    MenuComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(miRuteo),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
