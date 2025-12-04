import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { BackgroundAnimado } from '../background-animado/background-animado';
import { UuidService } from '../../services/uuid-service';
import { CommonModule } from '@angular/common';
import { PomodoroTimer } from '../pomodoro-timer/pomodoro-timer';

enum TimerMode {
  FOCUS = 'Foco',
  BREAK = 'Descanso',
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, BackgroundAnimado, PomodoroTimer],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})

export class HomeComponent implements OnInit {
  //Relogio e uuid
  relogio = signal<string>('');
  myUUID: string = '';

  constructor(private uuidService: UuidService) { }

  ngOnInit(): void {
    this.myUUID = this.uuidService.getOrCreateUUID();

    this.updateTime();

    setInterval(() => {
      this.updateTime();
    }, 1000);
  }
  
  updateTime(): void {
    const now = new Date();
    const timeString = now.toLocaleTimeString('pt-BR', { hour12: false });

    this.relogio.set(timeString);
  }
}
