import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {
  private urlEndPoint = "https://community-neutrino-currency-conversion.p.rapidapi.com/convert";

  constructor(private http: HttpClient) { }
  
  public convertirApi2(cantidad: number, monedaFrom: string, monedaTo: string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'X-RapidAPI-Key': '5ce7d3c811msh8789ac159f40c3ap14a059jsn879800f49f89',
		      'X-RapidAPI-Host': 'currency-converter18.p.rapidapi.com'
        }
      ),

      params: new HttpParams()
        .append('from',monedaFrom)
        .append('to',monedaTo)
        .append('amount',cantidad)
    }

    return this.http.get("https://currency-converter18.p.rapidapi.com/api/v1/convert", httpOptions);
  }

  public getMonedas(): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders(
        {
          'X-RapidAPI-Key': '5ce7d3c811msh8789ac159f40c3ap14a059jsn879800f49f89',
          'X-RapidAPI-Host': 'currency-converter18.p.rapidapi.com'
        }
      )
    }

    return this.http.get("https://currency-converter18.p.rapidapi.com/api/v1/supportedCurrencies",httpOptions);
  }
}
