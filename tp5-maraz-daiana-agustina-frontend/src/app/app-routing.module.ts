import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Punto1ProductoComponent } from './components/punto1-producto/punto1-producto.component';

const routes: Routes = [
  {
    path:"producto",
    component: Punto1ProductoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
