import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  manha: boolean = false;

  onCheckboxChange(event: Event) {
    this.manha = (event.target as HTMLInputElement).checked;
  }
}
