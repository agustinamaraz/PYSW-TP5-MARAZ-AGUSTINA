import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Punto1ProductoComponent } from './components/punto1-producto/punto1-producto.component';
import { Punto1ProductoFormComponent } from './components/punto1-producto-form/punto1-producto-form.component';
import { Punto2TransaccionComponent } from './components/punto2-transaccion/punto2-transaccion.component';
import { Punto2TransaccionFormComponent } from './components/punto2-transaccion-form/punto2-transaccion-form.component';
import { Punto3TicketComponent } from './components/punto3-ticket/punto3-ticket.component';
import { Punto3TicketFormComponent } from './components/punto3-ticket-form/punto3-ticket-form.component';

const routes: Routes = [
  {
    path:"producto",
    component: Punto1ProductoComponent
  },
  {
    path:"producto-form/:id",
    component: Punto1ProductoFormComponent
  },
  {
    path:"transaccion",
    component: Punto2TransaccionComponent
  },
  {
    path:"transaccion-form/:id",
    component: Punto2TransaccionFormComponent
  },
  {
    path:"ticket",
    component: Punto3TicketComponent
  },
  {
    path:"ticket-form/:id",
    component: Punto3TicketFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
