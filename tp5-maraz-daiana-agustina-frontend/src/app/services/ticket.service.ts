import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http:HttpClient) { }

  getTickets():Observable<any>{
    let httpOptions={
      headers: new HttpHeaders(
        {

        }
      ),
      params: new HttpParams()

    }

    return this.http.get("http://localhost:3000/api/ticket/",httpOptions);
  }

  getTicketsPorCategoria(categoria:string):Observable<any>{
    let httpOptions={
      headers: new HttpHeaders(
        {

        }
      ),
      params: new HttpParams()
        .append("categoria",categoria)
    }

    return this.http.get("http://localhost:3000/api/ticket/categoria",httpOptions);
  }

  createTicket(ticket:Ticket):Observable<any>{
    let httpOptions={
      headers: new HttpHeaders(
        {
          "Content-type": "application/json"
        }
      ),
      params: new HttpParams()
    }

    let body = JSON.stringify(ticket);
    
    return this.http.post("http://localhost:3000/api/ticket/",body,httpOptions);
  }

  deleteTicket(id:string):Observable<any>{
    let httpOptions={
      headers: new HttpHeaders(
        {

        }
      ),
      params: new HttpParams()
    }

    return this.http.delete("http://localhost:3000/api/ticket/"+id,httpOptions);
  }

  editTicket(ticket:Ticket):Observable<any>{
    let httpOptions={
      headers: new HttpHeaders(
        {
          "Content-type": "application/json"
        }
      ),
      params: new HttpParams()
    }

    let body = JSON.stringify(ticket);

    return this.http.put("http://localhost:3000/api/ticket/"+ticket._id,body,httpOptions);
  }

}
