import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  tasaConversion:string="Se mostrará una vez presionado el botón 'Convertir'";
  habilitarGuardar:boolean=false;

  constructor(private transaccionService: TransaccionService, private router:Router) {
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
    this.habilitarGuardar = true;
    //Calcula Tasa de Conversion
    this.transaccionService.convertirApi2(1, this.transaccion.monedaOrigen, this.transaccion.monedaDestino).subscribe(
      (result) => {
        //console.log(result);
        this.transaccion.tasaConversion = result.result.convertedAmount;
        this.tasaConversion = '1 ' + this.transaccion.monedaOrigen + " equivale a "+ this.transaccion.tasaConversion + " "+ this.transaccion.monedaDestino;
      },
      (error) => console.log("error")
    )
    
    //Convierte la cantidad solicitada con respecto a dos monedas
    this.transaccionService.convertirApi2(this.transaccion.cantidadOrigen, this.transaccion.monedaOrigen, this.transaccion.monedaDestino).subscribe(
      (result) => {
        //console.log(result);
        this.transaccion.cantidadDestino = result.result.convertedAmount;
      },
      (error) => console.log("error")
    )
  }

  public guardarTransaccion(){
    this.transaccionService.createTransaccion(this.transaccion).subscribe(
      (result:any) => {
        if (result.status == 1) {
          alert(result.msg);
          this.router.navigate(["transaccion"]);
        }
      },
      error => {
        alert(error.msg);
      }
    )
  }

}
