import { Component } from '@angular/core';

@Component({
  selector: 'app-pomodoro-timer',
  imports: [],
  templateUrl: './pomodoro-timer.html',
  styleUrl: './pomodoro-timer.css',
})
export class PomodoroTimer {
  pomodorotimer: string = '';

  get totalSeconds(): number {
    if(!this.pomodorotimer) return 0;

    const [hora,minuto,segundo] = this.pomodorotimer.split(':').map(Number);

    return hora * 3600 + minuto * 60 + segundo;
  }

  start(){

  }

  reset(){

  }

  stop(){
    
  }

}
