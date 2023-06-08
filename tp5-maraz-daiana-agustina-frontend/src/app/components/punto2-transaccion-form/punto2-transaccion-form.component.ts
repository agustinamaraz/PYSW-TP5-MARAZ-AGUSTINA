import { Component, OnInit } from '@angular/core';
import { Transaccion } from 'src/app/models/transaccion';
import { TransaccionService } from 'src/app/services/transaccion.service';

@Component({
  selector: 'app-punto2-transaccion-form',
  templateUrl: './punto2-transaccion-form.component.html',
  styleUrls: ['./punto2-transaccion-form.component.css']
})
export class Punto2TransaccionFormComponent implements OnInit {
  transaccion!: Transaccion;
  monedas!: Array<any>;

  constructor(private transaccionService: TransaccionService) {
    this.transaccion = new Transaccion();
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

  public convertir() {
    this.transaccionService.convertirApi2(this.transaccion.cantidadOrigen, this.transaccion.monedaOrigen, this.transaccion.monedaDestino).subscribe(
      (result) => {
        console.log(result);
        this.transaccion.cantidadDestino = result.result.convertedAmount;
      },
      () => console.log("error")
    )
  }

}
