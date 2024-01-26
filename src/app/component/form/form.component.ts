import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Input() dados: any;
  @Output() fazerGet = new EventEmitter<any>();

  emitirEventoFazerGet(): void {
    this.fazerGet.emit();
  }
}
