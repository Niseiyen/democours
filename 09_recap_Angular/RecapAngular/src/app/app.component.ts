import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RecapAngular';

  uneclass = [
    { nom: 'Brionna Ernser', note: 54 },
    { nom: 'Rowan Terry', note: 67 },
    { nom: 'Patricia Lehner', note: 45 },
    { nom: 'Jade Kohler ', note: 98 },
    { nom: 'Hattie Gleichner', note: 77 },
    { nom: 'Alycia Gusikowski', note: 67 },
    { nom: 'Travis Emmerich', note: 57 },
    { nom: 'Jena Wiegand', note: 60 },
    { nom: 'Vella Leffler', note: 66 },
    { nom: 'Marcelle Morissette', note: 65 },
    { nom: 'Allie Haley', note: 88 }
  ];

  calculMoyenne(): number {
    let total = 0;
    for (let i = 0; i < this.uneclass.length; i++) {
      total += this.uneclass[i].note;
    }
    return total / this.uneclass.length;
  }

  isBelowPassing(score: number): boolean {
    return score < 60;
  }
  
  isAboveAverage(score: number): boolean {
    return score >= this.calculMoyenne();
  }
  
}
