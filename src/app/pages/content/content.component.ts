import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  photoCover: string =
    'https://ew.com/thmb/_eeSW0rNytiU5CMQM6c1IA_IXLE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/wil-johnson-theo-nate-steve-toussaint-solly-mccleod-house-of-the-dragon-090222-e11ead875b3f439f8c7ebca283deffd6.jpg';
  contentTitle: string = 'MINHA NOTICIA';
  contentDescription: string = 'Olá, Mundo!';
  private id: string | null = '0';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));
  }

  setValuesToComponent(id: string) {
    const result = dataFake.filter((articles) => articles.id == id);
  }
}
