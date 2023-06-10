import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-punto1-producto-form',
  templateUrl: './punto1-producto-form.component.html',
  styleUrls: ['./punto1-producto-form.component.css']
})
export class Punto1ProductoFormComponent implements OnInit {
  producto = new Producto();
  accion:string="";

  constructor(private productoService:ProductoService,private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params =>{
        if(params['id'] == 0){
          this.accion = "new";
        }else{
          this.accion = "update";
          this.cargarProducto(params['id']);
        }
      }
    )
  }

  cargarProducto(id:string){
    this.productoService.getProducto(id).subscribe(
      result=>{
        Object.assign(this.producto,result);
      },
      error=>{
        console.log(error);
      }
    )
  }

  guardarProducto(){
    this.productoService.createProducto(this.producto).subscribe(
      result=>{
        if(result.status == 1){
          alert(result.msg);
          this.router.navigate(["producto"])
        }
      },
      error=>{
        alert(error.msg);
      }
    )
    
  }

  actualizarProducto(){
    this.productoService.editProducto(this.producto).subscribe(
      (result:any) => {
        if (result.status == 1) {
          alert(result.msg);
          this.router.navigate(["producto"])
        }
      },
      (error:any) => {
        alert(error.msg);
      }
    )
  }

  cancelar(){
    this.router.navigate(["producto"])
  }

}
