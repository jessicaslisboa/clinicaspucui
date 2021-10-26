import { Exame } from './exame';
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

  remover(codigo : number){
    return this.http.delete<Consulta>(this.consultaUrl + codigo, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  listaExames() : Observable<Exame[]>{
    return this.http.get<Exame[]>(this.consultaUrl+'exames')
    .pipe(
      catchError(this.errorHandler)
    );
  }

  encontrar(codigo: number) : Observable<Consulta> {
    return this.http.get<Consulta>(this.consultaUrl + codigo)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  editar(codigo: number, consulta : Consulta): Observable<Consulta> {
    return this.http.put<Consulta>(this.consultaUrl + codigo, JSON.stringify(consulta), this.httpOptions)
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
