import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CronometroService } from '../../services/cronometro-service';

@Component({
  selector: 'app-pomodoro-timer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pomodoro-timer.html',
  styleUrls: ['./pomodoro-timer.css'],
})

export class PomodoroTimer {
  tempoEmSegundos: number = 0;
  intervalo: any;
  isRunning: boolean = false;

  constructor(private cronometroService: CronometroService) { }

  get tempoFormatado() {
    return this.formatarTempo(this.cronometroService.tempoRestante());
  }

  onInputSelect(event: any) {
    const selectedValue = Number(event.target.value);
    this.value = selectedValue;
    
    const segundos = selectedValue * 60;
    this.cronometroService.definirTempo(segundos);
  }

  formatarTempo(segundos: number): string {
    const h = Math.floor(segundos / 3600);
    const m = Math.floor((segundos % 3600) / 60);
    const s = segundos % 60;

    const hh = h.toString().padStart(2, '0');
    const mm = m.toString().padStart(2, '0');
    const ss = s.toString().padStart(2, '0');

    return `${hh}:${mm}:${ss}`;
  }

  value: number = 0;

  increment() {
    this.value++;
  }

  decrement() {
    if (this.value > 0) this.value--;
  }

  onInputChange(event: any) {
    const numericValue = Number(event.target.value);

    // Impedir valores negativos
    if (numericValue < 0 || isNaN(numericValue)) {
      this.value = 0;
    } else {
      this.value = numericValue;
    }
  }



  start() {
    const segundosSelecionados = this.value * 60;
    this.cronometroService.start(segundosSelecionados);
    this.isRunning = true;
  }

  pause() {
    this.cronometroService.pause();
    this.isRunning = false;
  }

  reset() {
    this.cronometroService.reset();
    this.isRunning = false;
  }

}