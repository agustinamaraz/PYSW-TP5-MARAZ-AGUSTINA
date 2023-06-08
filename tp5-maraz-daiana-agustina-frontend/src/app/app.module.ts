import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Punto1ProductoComponent } from './components/punto1-producto/punto1-producto.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { Punto1ProductoFormComponent } from './components/punto1-producto-form/punto1-producto-form.component';


@NgModule({
  declarations: [
    AppComponent,
    Punto1ProductoComponent,
    MenuComponent,
    FooterComponent,
    Punto1ProductoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
