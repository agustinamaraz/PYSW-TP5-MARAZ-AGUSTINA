import { Component, OnInit } from '@angular/core';
import { Console } from 'console';
import { Transaccion } from 'src/app/models/transaccion';
import { TransaccionService } from 'src/app/services/transaccion.service';

@Component({
  selector: 'app-punto2-transaccion',
  templateUrl: './punto2-transaccion.component.html',
  styleUrls: ['./punto2-transaccion.component.css']
})
export class Punto2TransaccionComponent implements OnInit {
  transacciones:Array<Transaccion>;
  filtro!:boolean;

  constructor(private transaccionService:TransaccionService){
    this.transacciones = new Array<Transaccion>();

    this.obtenerTransacciones();
  }

  ngOnInit(): void {
  }

  obtenerTransacciones(){
    this.transaccionService.getTransacciones().subscribe(
      result=>{
        let unaTransaccion = new Transaccion();
        result.forEach((element:any) => {
          Object.assign(unaTransaccion,element);
          this.transacciones.push(unaTransaccion);
          unaTransaccion = new Transaccion();
        });
        console.log(result);
      },
      error=>{
        console.log(error);
      }
    )
  }

  cargarTransacciones(){
    this.filtro=false;

  }

  cargarPorFiltro(){
    this.filtro=true;
    
  }

}
