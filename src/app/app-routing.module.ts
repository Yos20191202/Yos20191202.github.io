import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/InicioComponent';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { MusicaComponent } from './musica/musica.component';
import { ConciertoComponent } from './concierto/concierto.component';
import { ProductosComponent } from './productos/productos.component';
import { ContactosComponent } from './contactos/contactos.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  { path:'', component: InicioComponent, },
  { path: 'acerca-de', component: AcercaDeComponent },
  { path: 'musica', component: MusicaComponent },
  { path:'concierto', component: ConciertoComponent },
  { path:'productos', component: ProductosComponent },
  { path:'contactos', component: ContactosComponent },
  { path:'login', component: LoginComponent },
  { path:'registro', component:RegistroComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
