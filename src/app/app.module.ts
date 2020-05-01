import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/main/carousel/carousel.component';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchComponent } from './components/header/search/search.component';
import { ItemComponent } from './components/item/item.component';
import { ContactHeaderComponent } from './components/header/contact-header/contact-header.component';
import { SectionComponent } from './components/section/section.component';
import { ContactComponent } from './components/contact/contact.component';
import { PreguntasComponent } from './components/preguntas/preguntas.component';
import { ProductosComponent } from './components/productos/productos.component';
import { FormComponent } from './components/contact/form/form.component';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { CarritoComponent } from './components/header/carrito/carrito.component';
import { DestacadosComponent } from './components/main/destacados/destacados.component';
import { CategoriasComponent } from './components/productos/categorias/categorias.component';
import { OrdenarComponent } from './components/productos/ordenar/ordenar.component';
import { CardProductoComponent } from './components/productos/card-producto/card-producto.component';
import { ProductoComponent } from './components/productos/producto/producto.component';
import { ImagenProductoComponent } from './components/productos/producto/imagen-producto/imagen-producto.component';
import { SliderProductoComponent } from './components/productos/producto/slider-producto/slider-producto.component';
import { HeaderProductoComponent } from './components/productos/producto/header-producto/header-producto.component';
import { DetallesProductoComponent } from './components/productos/producto/detalles-producto/detalles-producto.component';
import { ProductosRelacionadosComponent } from './components/productos/producto/productos-relacionados/productos-relacionados.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    CarouselComponent,
    MainComponent,
    LoginComponent,
    RegisterComponent,
    SearchComponent,
    ItemComponent,
    ContactHeaderComponent,
    SectionComponent,
    ContactComponent,
    PreguntasComponent,
    ProductosComponent,
    FormComponent,
    CopyrightComponent,
    CarritoComponent,
    DestacadosComponent,
    CategoriasComponent,
    OrdenarComponent,
    CardProductoComponent,
    ProductoComponent,
    ImagenProductoComponent,
    SliderProductoComponent,
    HeaderProductoComponent,
    DetallesProductoComponent,
    ProductosRelacionadosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FlashMessagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
