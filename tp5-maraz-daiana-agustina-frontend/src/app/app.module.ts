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
import { Punto2TransaccionFormComponent } from './components/punto2-transaccion-form/punto2-transaccion-form.component';
import { Punto2TransaccionComponent } from './components/punto2-transaccion/punto2-transaccion.component';
import { Punto3TicketComponent } from './components/punto3-ticket/punto3-ticket.component';
import { Punto3TicketFormComponent } from './components/punto3-ticket-form/punto3-ticket-form.component';


@NgModule({
  declarations: [
    AppComponent,
    Punto1ProductoComponent,
    MenuComponent,
    FooterComponent,
    Punto1ProductoFormComponent,
    Punto2TransaccionFormComponent,
    Punto2TransaccionComponent,
    Punto3TicketComponent,
    Punto3TicketFormComponent
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
