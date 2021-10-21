import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Consulta } from './consulta';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  consultaUrl = '/api/clinicaspuc/rs/consulta/';

  constructor(
    private http: HttpClient
  ) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  salvar(consulta: Consulta):Observable<Consulta> {
    return this.http.post<Consulta>(this.consultaUrl, JSON.stringify(consulta), this.httpOptions).
      pipe(
      catchError(this.errorHandler)
    )
  }

  listAll(): Observable<Consulta[]>{
    return this.http.get<Consulta[]>(this.consultaUrl)
    .pipe(
      catchError(this.errorHandler)
    );
  }


  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    return throwError(errorMessage);
 }
}
