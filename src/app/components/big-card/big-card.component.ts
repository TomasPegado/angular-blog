import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css'],
})
export class BigCardComponent {
  @Input()
  photoCover: string = '';

  @Input()
  cardTitle: string = 'DRAGÃO EM CAMPO DE BATALHA';

  @Input()
  cardDescription: string =
    'O dragão entrou no campo de batalha e virou o jogo os verdes';
}
