import { Component, OnInit } from '@angular/core';
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

  constructor(private transaccionService: TransaccionService) {
    this.transacciones = new Array<Transaccion>();
    this.transaccionesFiltro = new Array<Transaccion>();

  }

  ngOnInit(): void {
  }

  obtenerTransacciones() {
    this.filtro = false;

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

}
