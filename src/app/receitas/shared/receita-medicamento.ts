import { Medicamento } from "src/app/medicamentos/shared/medicamento";

export class ReceitaMedicamento {

  codigo:number;

  medicamento: Medicamento = new Medicamento();

  dose: string;
}
