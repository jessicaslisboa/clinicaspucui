import { environment } from './../../../environments/environment.prod';
import { Paciente } from './paciente';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  pacienteUrl = environment.api+'/paciente/';

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json',"Access-Control-Allow-Origin": "*"})
  }

  listAll(): Observable<Paciente[]>{
    return this.http.get<Paciente[]>(this.pacienteUrl)
    .pipe(
      catchError(this.errorHandler)
    );
  }

  salvar(paciente: Paciente): Observable<Paciente>{
    return this.http.post<Paciente>(this.pacienteUrl, JSON.stringify(paciente), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  encontrar(codigo: number): Observable<Paciente> {
    return this.http.get<Paciente>(this.pacienteUrl + codigo)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  editar(codigo: number, paciente : Paciente): Observable<Paciente> {
    return this.http.put<Paciente>(this.pacienteUrl + codigo, JSON.stringify(paciente), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  remover(codigo : number){
    return this.http.delete<Paciente>(this.pacienteUrl + codigo, this.httpOptions)
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
