import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background-animado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './background-animado.html',
  styleUrls: ['./background-animado.css']
})
export class BackgroundAnimado implements OnInit {

  skyClass = '';
  sunPosition = 0;
  moonPosition = 0;
  isDay = true;

  ngOnInit() {
    this.updateSky();
  }

  updateSky() {
    const hour = new Date().getHours();

    // Definir se é dia ou noite
    this.isDay = hour >= 5 && hour < 18;

    // Classes do céu
    if (hour >= 5 && hour < 12) {
      this.skyClass = 'morning';
    } else if (hour >= 12 && hour < 18) {
      this.skyClass = 'afternoon';
    } else {
      this.skyClass = 'night';
    }

    // Movimento do sol (entre 5h e 18h)
    this.sunPosition = (hour / 24) * 100;

    // Movimento da lua (entre 18h e 5h)
    // A lua percorre a tela oposta ao sol
    // 18h → início | 5h → final
    if (hour >= 18) {
      this.moonPosition = ((hour - 18) / 11) * 100;
    } else {
      this.moonPosition = ((hour + 6) / 11) * 100;
    }
  }
}
