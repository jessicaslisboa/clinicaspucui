import { Inject } from '@angular/core';
import { Endereco } from './endereco';
export class Paciente {
  codigo: number;
  nome: string;
  dataNascimento: Date;
  cpf: string;
  sexo: string;
  email: string;
  endereco: Endereco = new Endereco();
}
