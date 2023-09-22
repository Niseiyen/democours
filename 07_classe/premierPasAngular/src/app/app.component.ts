import { Component, Directive } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  monTexte = 'Bonjour à tous !';
  boutonActif: boolean = true;
  monAutreTexte = 'NgModule !';
  isAvailable = true;
  monNombre = 16;

  listeLivres = [
    {
        titre: 'Angular 14'
    },
    {
        titre: 'Java 21'
    },
    {
        titre: 'Svelte 3'
    },
    {
        titre: 'Flutter 3'
    },
    {
        titre: 'Dart 2'
    },
    {
        titre: 'React 18'
    }
];

  onBoutonClique() {
    this.boutonActif = !this.boutonActif;
  }
  cachertexte() {
    this.isAvailable = !this.isAvailable;
  }

  inputOfText(event: Event) {
    const inputOfText = (event.target as HTMLInputElement).value;
    console.log(inputOfText);
    this.monTexte = inputOfText;
  }
  
  effacerTexte() {
    this.monTexte = '';
  }

  monCarre(valeur: number) {
    return Math.sqrt(valeur);
  }
  
}


