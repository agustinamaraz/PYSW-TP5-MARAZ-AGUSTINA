import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-punto1-producto',
  templateUrl: './punto1-producto.component.html',
  styleUrls: ['./punto1-producto.component.css']
})
export class Punto1ProductoComponent implements OnInit {
  productosDestacados:Array<Producto>;

  constructor(private productoService:ProductoService) { 
    this.productosDestacados = new Array<Producto>();
    this.obtenerProductosDestacados();
  }

  ngOnInit(): void {
    
  }

  obtenerProductosDestacados(){
    this.productoService.getProductosDestacados().subscribe(
      result=>{
        let unProducto = new Producto();
        result.forEach((element:any) => {
          Object.assign(unProducto,element);
          this.productosDestacados.push(unProducto);
          unProducto = new Producto();
        });
        console.log(this.productosDestacados);
      },
      error=>{
        alert(error);
      }
    )
  }

}
