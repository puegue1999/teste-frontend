import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input() dados: any;
  @Input() filtro: any;
  @Input() fechadas: any;
  @Input() pagina: any;
  @Output() mudarPagina: EventEmitter<number> = new EventEmitter<number>();
  itensPorPagina = 4;
  desktop = true;
  total: any;
  paginas: any[] = [];

  ngOnInit() {
    if (this.larguraTela < 768) {
      this.itensPorPagina = 1;
      this.desktop = false;
    }

  }

  // Itens listados por página;
  get itensNaPagina() {
    if (this.dados) {
      this.paginas = [];
      this.total = Math.ceil(this.dados.length/this.itensPorPagina);
      for (let i = 0; i < this.dados.length; i += this.itensPorPagina) {
        this.paginas.push(this.dados.slice(i, i + this.itensPorPagina));
      }
    }
    return this.paginas[this.pagina];
  }

  get larguraTela(): number {
    return window.innerWidth;
  }

  eventMudarPagina(paginaAtual: number): void {
    this.mudarPagina.emit(paginaAtual);
  }

  // Função necessária pois o endereço está em formato html;
  textoFormatado(textoBruto: string): string {
    const parser = new DOMParser();
    const doc = parser.parseFromString(textoBruto, 'text/html');
    const body = doc.body;

    return body.innerHTML;
  }
}
