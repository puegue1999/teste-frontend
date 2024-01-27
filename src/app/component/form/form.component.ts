import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Input() dados: any;
  @Input() fechadas!: boolean;
  @Input() total!: number;
  @Output() fazerGet = new EventEmitter<any>();
  manha: boolean = false;
  tarde: boolean = false;
  noite: boolean = false;
  selecionado: string = '';

  selecionarOpcao(opcao: string): void {
    this.selecionado = opcao;
  }

  // Seleciona a filtragem desejada;
  emitirEventoFazerGet(): void {
    if(this.selecionado === 'manha'){
      this.fazerGet.emit({ filtro: '06h às 12h', fechadas: this.fechadas });
    }else if(this.selecionado === 'tarde'){
      this.fazerGet.emit({ filtro: '12h às 18h', fechadas: this.fechadas });
    }else if(this.selecionado === 'noite'){
      this.fazerGet.emit({ filtro: '18h às 23h', fechadas: this.fechadas });
    }else{
      this.fazerGet.emit({ undefined, fechadas: this.fechadas });
    }
  }

  // Limpa todas as filtragens;
  limparGet(): void {
    this.manha = false;
    this.tarde = false;
    this.noite = false;
    this.fechadas = false;
    this.selecionado = '';
    this.fazerGet.emit({ undefined, fechadas: this.fechadas });
  }

}
