import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-punto3-ticket-form',
  templateUrl: './punto3-ticket-form.component.html',
  styleUrls: ['./punto3-ticket-form.component.css']
})
export class Punto3TicketFormComponent implements OnInit {
  ticket!:Ticket;
  accion!:string;
  constructor(private ticketService:TicketService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params =>{
        if(params['id'] == 0){
          this.accion = "new";
        }else{
          this.accion = "update";
          this.cargarTicket(params['id']);
        }
      }
    )
  }

  cargarTicket(id:string){
    this.ticketService.getTicket(id).subscribe(
      result=>{
        Object.assign(this.ticket,result);
      },
      error=>{
        console.log(error);
      }
    )
  }

  guardarTicket(ticket:Ticket){
    this.ticketService.createTicket(ticket).subscribe(
      result=>{
        if(result.status == 1){
          alert(result.msg);
        }
      },
      error=>{
        alert(error.msg);
      }
    )
  }
}
