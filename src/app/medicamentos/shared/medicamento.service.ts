import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Medicamento } from './medicamento';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MedicamentoService {

  medicamentoUrl = '/api/medicamento/';

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  listAll(): Observable<Medicamento[]>{
    return this.http.get<Medicamento[]>(this.medicamentoUrl)
    .pipe(
      catchError(this.errorHandler)
    );
  }

  salvar(medicamento: Medicamento): Observable<Medicamento>{
    return this.http.post<Medicamento>(this.medicamentoUrl, JSON.stringify(medicamento), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  encontrar(codigo: number): Observable<Medicamento> {
    return this.http.get<Medicamento>(this.medicamentoUrl + codigo)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  editar(codigo: number, medicamento : Medicamento): Observable<Medicamento> {
    return this.http.put<Medicamento>(this.medicamentoUrl + codigo, JSON.stringify(medicamento), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  remover(codigo : number){
    return this.http.delete<Medicamento>(this.medicamentoUrl + codigo, this.httpOptions)
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
