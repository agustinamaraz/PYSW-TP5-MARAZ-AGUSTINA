import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Espectador } from 'src/app/models/espectador';
import { Ticket } from 'src/app/models/ticket';
import { EspectadorService } from 'src/app/services/espectador.service';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-punto3-ticket-form',
  templateUrl: './punto3-ticket-form.component.html',
  styleUrls: ['./punto3-ticket-form.component.css']
})
export class Punto3TicketFormComponent implements OnInit {
  ticket!: Ticket;
  accion!: string;
  espectadores!: Array<Espectador>;

  constructor(private ticketService: TicketService, private activatedRoute: ActivatedRoute, private router: Router, private espectadorService: EspectadorService) {
    this.ticket = new Ticket();
    this.espectadores = new Array<Espectador>();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        

        if (params['id'] == 0) {
          this.accion = "new";
          this.cargarEspectadores();
        } else {
          this.accion = "update";
          this.cargarEspectadores();
          this.cargarTicket(params['id']);
        }
      }
    )
  }

  cargarTicket(id: string) {
    this.ticketService.getTicket(id).subscribe(
      (result) => {
        Object.assign(this.ticket, result);
        this.ticket.espectador = this.espectadores.find(item => (item._id == this.ticket.espectador._id))!; //no funciona preguntar
        console.log(this.ticket.espectador);
        console.log(this.espectadores);
      },
      error => {
        console.log(error);
      }
    )
  }

  guardarTicket(ticket: Ticket) {
    this.ticketService.createTicket(ticket).subscribe(
      result => {
        if (result.status == 1) {
          alert(result.msg);
        }
      },
      error => {
        alert(error.msg);
      }
    )

    this.router.navigate(["ticket"])
  }

  cargarEspectadores() {
    this.espectadorService.getEspectadores().subscribe(
      result => {
        let unEspectador = new Espectador();
        result.forEach((element: any) => {
          Object.assign(unEspectador, element);
          this.espectadores.push(unEspectador);
          unEspectador = new Espectador();
        });

        //console.log(this.espectadores);
      },
      error => {
        console.log(error);
      }
    )
  }


}
