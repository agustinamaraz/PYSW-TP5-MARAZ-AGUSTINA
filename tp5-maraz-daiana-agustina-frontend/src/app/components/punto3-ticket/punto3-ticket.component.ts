import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-punto3-ticket',
  templateUrl: './punto3-ticket.component.html',
  styleUrls: ['./punto3-ticket.component.css']
})
export class Punto3TicketComponent implements OnInit {
  tickets!:Array<Ticket>;
  ticketsPorCategoria!:Array<Ticket>;
  filtro!:boolean;
  categoriaEspectador!:string;
  click!:boolean;

  constructor(private ticketService:TicketService,private router:Router) {
    this.tickets = new Array<Ticket>();
    this.ticketsPorCategoria = new Array<Ticket>();
    this.obtenerTickets();
   }

  ngOnInit(): void {
  }

  obtenerTickets(){
    this.ticketService.getTickets().subscribe(
      result=>{
        let unTicket = new Ticket();
        result.forEach((element:any) => {
          Object.assign(unTicket,element);
          this.tickets.push(unTicket);
          unTicket = new Ticket();
        });
        //console.log(result);
      },
      error=>{
        console.log(error);
      }
    )
  }

  obtenerTicketsPorCategoria(){
    this.click=true;

    this.ticketsPorCategoria = new Array<Ticket>();
    
    this.ticketService.getTicketsPorCategoria(this.categoriaEspectador).subscribe(
      result=>{
        this.ticketsPorCategoria = result;
        //console.log(result);
      },
      error=>{
        console.log(error);
      }
    )
  }

  eliminarTicket(ticket:Ticket){
    this.ticketService.deleteTicket(ticket._id).subscribe(
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

  modificarTicket(ticket:Ticket){
    this.router.navigate(["ticket-form",ticket._id])
  }

}
