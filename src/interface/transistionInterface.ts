import { randomUUID } from 'node:crypto';

export interface ITransition {
  id?: string;
  valor: number;
  destino: string;
  data?: Date;
}

export class Transition implements ITransition {
  constructor() {
    this.valor = 0;
    this.destino = '';
    this.data = new Date();
  }
  id?: string | undefined;
  valor: number;
  destino: string;
  data?: Date | undefined;
}
