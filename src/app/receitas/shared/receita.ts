import { Medicamento } from 'src/app/medicamentos/shared/medicamento';
import { Paciente } from 'src/app/pacientes/shared/paciente';
export class Receita {
    codigo: number;
    paciente: Paciente = new Paciente();
    remedios: Array<Medicamento> = Array<Medicamento>();
}
