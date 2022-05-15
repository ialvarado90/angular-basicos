import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  deletedHeroe: string = '';

  borrarHeroe() {
    this.deletedHeroe = this.heroes.shift() || '';
    console.log(this.deletedHeroe);
  }
}
