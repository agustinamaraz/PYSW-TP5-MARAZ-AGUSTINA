import { Component, OnInit } from '@angular/core';
import { Transaccion } from 'src/app/models/transaccion';
import { TransaccionService } from 'src/app/services/transaccion.service';

@Component({
  selector: 'app-punto2-transaccion',
  templateUrl: './punto2-transaccion.component.html',
  styleUrls: ['./punto2-transaccion.component.css']
})
export class Punto2TransaccionComponent implements OnInit {
  constructor(){}

  ngOnInit(): void {
  }

}
