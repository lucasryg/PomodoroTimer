import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class RelogioService {

  getHorarioAtual(): Date {
    return new Date().toLocaleTimeString('pt-BR', { hour12: false }) as unknown as Date;
  }
}
