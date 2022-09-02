import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Vivian da Cunha ';
  nascimento = 1975;
  counter = 0;
  timer = setInterval(() => {
    this.counter = this.counter + 1;
  });

  getIdade() {
    return 2022 - this.nascimento;
  }
}
