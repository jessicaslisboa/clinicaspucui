import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Agenda } from './agenda';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {


  agendaUrl = '/api/agenda/';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  listAll(): Observable<Agenda[]>{
    return this.http.get<Agenda[]>(this.agendaUrl)
    .pipe(
      catchError(this.errorHandler)
    );
  }

  encontrar(codigo: number) : Observable<Agenda> {
    return this.http.get<Agenda>(this.agendaUrl + codigo)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  remover(codigo : number){
    return this.http.delete<Agenda>(this.agendaUrl + codigo, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  salvar(agenda: Agenda): Observable<Agenda>{
    console.log(JSON.stringify(agenda));
    return this.http.post<Agenda>(this.agendaUrl, JSON.stringify(agenda), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  editar(codigo: number, agenda : Agenda): Observable<Agenda> {
    return this.http.put<Agenda>(this.agendaUrl + codigo, JSON.stringify(agenda), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
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
