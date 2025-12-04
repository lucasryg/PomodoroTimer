import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CronometroService {
  tempoRestante = signal<number>(0);
  isRunning = signal<boolean>(false);

  private intervalId: any = null;

  constructor() {
    effect(() => {
      const rodando = this.isRunning();

      if (rodando) {
        this.inicarIntervalo();
      } else {
        this.pararIntervalo();
      }
    })
  }

  start(tempoEmSegundos?: number) {
    if (tempoEmSegundos !== undefined && this.tempoRestante() === 0) {
      this.tempoRestante.set(tempoEmSegundos);
    }
    this.isRunning.set(true);
  }

  pause() {
    this.isRunning.set(false);
  }

  unPause() {
    this.isRunning.set(true);
  }

  reset() {
    this.tempoRestante.set(0);
    this.isRunning.set(false);
  }

  private inicarIntervalo() {
    if (this.intervalId) return;

    this.intervalId = setInterval(() => {
      const atual = this.tempoRestante();
      if (atual > 0) {
        this.tempoRestante.set(atual - 1);
      } else {
        this.isRunning.set(false);
      }
    }, 1000)
  }
  private pararIntervalo() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  definirTempo(segundos: number) {
    this.tempoRestante.set(segundos);
  }
}
