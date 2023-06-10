import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Console, error } from 'console';
import { Transaccion } from 'src/app/models/transaccion';
import { TransaccionService } from 'src/app/services/transaccion.service';
import { resourceLimits } from 'worker_threads';

@Component({
  selector: 'app-punto2-transaccion',
  templateUrl: './punto2-transaccion.component.html',
  styleUrls: ['./punto2-transaccion.component.css']
})
export class Punto2TransaccionComponent implements OnInit {
  transacciones: Array<Transaccion>;
  transaccionesFiltro: Array<Transaccion>;
  filtro!: boolean;
  click!:boolean;
  monedaOrigen!: string;
  monedaDestino!: string;
  monedas!: Array<any>;

  constructor(private transaccionService: TransaccionService, private router:Router) {
    this.transacciones = new Array<Transaccion>();
    this.transaccionesFiltro = new Array<Transaccion>();
    this.monedas = new Array<any>();
    this.obtenerMonedas();
  }

  ngOnInit(): void {
  }

  public obtenerMonedas(){
    this.transaccionService.getMonedas().subscribe(
      (result)=>{ // devuelve un arreglo
        for(let i:number=0; i<10;i++){ //solo carga los 10 primeros de los 162 que hay
          this.monedas.push(result[i]);
        }
        console.log(this.monedas);
      },
      error => {
        alert("Error");
      }
    )
  }

  obtenerTransacciones() {
    this.filtro = false;

    this.transacciones = new Array<Transaccion>();

    this.transaccionService.getTransacciones().subscribe(
      result => {
        let unaTransaccion = new Transaccion();
        result.forEach((element: any) => {
          Object.assign(unaTransaccion, element);
          this.transacciones.push(unaTransaccion);
          unaTransaccion = new Transaccion();
        });
        console.log(result);
      },
      error => {
        console.log(error);
      }
    )
  }

  obtenerTransaccionesPorFiltro() {
    this.click = true;

    this.transaccionesFiltro = new Array<Transaccion>();

    this.transaccionService.getTransaccionesPorFiltro(this.monedaOrigen, this.monedaDestino).subscribe(
      result => {
        // let unaTransaccion = new Transaccion();
        // result.forEach((element: any) => {
        //   Object.assign(unaTransaccion, element);
        //   this.transaccionesFiltro.push(unaTransaccion);
        //   unaTransaccion = new Transaccion();
        // });
        console.log(result);
        this.transaccionesFiltro = result;
      },
      error => {
        console.log(error);
      }
    )
  }

  modificarTransaccion(t:Transaccion){
    this.router.navigate(["transaccion-form",t._id])
  }

  eliminarTransaccion(t:Transaccion){
    this.transaccionService.deleteTransaccion(t._id).subscribe(
      result=>{
        if(result.status == 1){
          alert(result.msg);
          window.location.reload();
        }
      },
      error=>{
        alert(error.msg);
      }
    )
  }

}
