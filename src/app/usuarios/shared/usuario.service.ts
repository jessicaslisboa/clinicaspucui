import { environment } from './../../../environments/environment.prod';
import { Router } from '@angular/router';
import { Usuario } from './usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Perfil } from './perfil';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuarioAutenticado : boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  usuarioUrl = environment.api+'usuario/';

  constructor(
    private router: Router,
    private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json',"Access-Control-Allow-Origin": "*"})
  }

  userEstaAutenticado(){
    return this.usuarioAutenticado;
  }

  listAll(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.usuarioUrl)
    .pipe(
      catchError(this.errorHandler)
    );
  }

  listPerfis(): Observable<Perfil[]>{
    return this.http.get<Perfil[]>(this.usuarioUrl+'perfil')
    .pipe(
      catchError(this.errorHandler)
    );
  }

  listUsuarioPorPefil(codigoPerfil:number): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.usuarioUrl+'perfil/'+codigoPerfil)
    .pipe(
      catchError(this.errorHandler)
    );
  }

  salvar(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.usuarioUrl, JSON.stringify(usuario), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  encontrar(codigo: number): Observable<Usuario> {
    return this.http.get<Usuario>(this.usuarioUrl + codigo)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  editar(codigo: number, usuario : Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(this.usuarioUrl + codigo, JSON.stringify(usuario), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  remover(codigo : number){
    return this.http.delete<Usuario>(this.usuarioUrl + codigo, this.httpOptions)
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

 logar(usuario: Usuario){
  if((usuario.email=='jessica@teste.com' && usuario.senha=='123456') ||
    (usuario.email=='ana@teste.com') &&(usuario.senha=='654321')){
    this.usuarioAutenticado = true;

    this.mostrarMenuEmitter.emit(true);

    this.router.navigate(['/']);

  }else{
    this.usuarioAutenticado = false;
    this.mostrarMenuEmitter.emit(false);
  }
 }

}
