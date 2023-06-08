import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Punto1ProductoComponent } from './components/punto1-producto/punto1-producto.component';
import { Punto1ProductoFormComponent } from './components/punto1-producto-form/punto1-producto-form.component';

const routes: Routes = [
  {
    path:"producto",
    component: Punto1ProductoComponent
  },
  {
    path:"producto-form/:id",
    component: Punto1ProductoFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
