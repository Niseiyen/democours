import { Component } from '@angular/core';
import { computeMsgId } from '@angular/compiler';
import { ChangeDetectionStrategy, OnDestroy, computed, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sigals';

  refInterval: any;

  $unSignal = signal(42);
  unValeur = 42;

  $leCarre = computed(() => this.$unSignal() * this.$unSignal());

  $laReponse = computed(() => {
    console.log("Calcul de la réponse");
    if (this.$unSignal() === 42) {
      return 'La reponse a la vie, l\'univers et le reste !';
    } else {
      return 'Vous avez un nombre pas important.';
    }
  });

  compteSeconde() {
    this.refInterval = setInterval(() => {
      this.$unSignal.update((v) => v + 1);
      this.unValeur++;
      console.log(this.unValeur);
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.refInterval){
      clearInterval(this.refInterval);
    }
  }
}
