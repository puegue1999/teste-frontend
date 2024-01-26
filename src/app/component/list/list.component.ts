import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input() dados: any;

  get dadosSorted(): any[] {
    return this.dados && this.dados.slice().sort((a: { id: number; }, b: { id: number; }) => a.id - b.id);
  }
}
