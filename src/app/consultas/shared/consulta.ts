import { Agenda } from "src/app/agendas/shared/agenda";
import { Paciente } from "src/app/pacientes/shared/paciente";

export class Consulta {

  codigo: number;
  anotacao: string;
  realizda: boolean;
  agenda: Agenda = new Agenda();
  paciente: Paciente = new Paciente();

}
