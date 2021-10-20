import { Perfil } from './perfil';

export class Usuario {
  codigo: number;
  nome: string;
  email: string;
  senha: string;
  perfil: Perfil = new Perfil();
}
