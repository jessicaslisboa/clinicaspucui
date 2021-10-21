import { Time } from '@angular/common';
import { Usuario } from './../../usuarios/shared/usuario';
export class Agenda {
  codigo:number;
  data:Date;
  disponivel: boolean;
  usuario: Usuario = new Usuario;
}
