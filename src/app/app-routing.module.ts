import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MainComponent } from './components/main/main.component';
import { ContactComponent } from './components/contact/contact.component';
import { PreguntasComponent } from './components/preguntas/preguntas.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoComponent } from './components/productos/producto/producto.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'preguntas-frecuentes', component: PreguntasComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'productos/:id', component: ProductoComponent },
  { path: 'productos/categorias/:categoria', component: ProductosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
