import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private apiUrl = 'https://test-frontend-developer.s3.amazonaws.com/data/locations.json';
  dadosApi: any;
  locations: any;
  total!: number;
  horario!: string;
  fechadas: boolean = false;
  paginaAtual = 0;

  ngOnInit(): void {
    this.chamadaApi();
  }

  // Get para que as locations pegas pela API e ordenar pelo id;
  get dadosSorted(): any[] {
    return this.dadosApi?.locations?.slice().sort((a: { id: number; }, b: { id: number; }) => a.id - b.id);
  }

  // Get para que liste apenas os dados filtrados pelo componente Form e que possa ser usada no front;
  get dadosFiltrados(): any[] {
    if(this.horario && !this.fechadas){
      return this.transform(this.dadosSorted?.filter((item: { content: any; opened: boolean; }) => item.content && item.opened), this.horario);
    }else if(this.horario && this.fechadas){
      return this.transform(this.dadosSorted?.filter((item: { content: any; opened: boolean; }) => item.content && !item.opened), this.horario);
    }else{
      return this.transform(this.dadosSorted?.filter((item: { content: any; }) => item.content), this.horario);
    }
  }

  chamadaApi(): void {
    axios.get(`${this.apiUrl}`)
    .then(response => {
      this.dadosApi = response.data;
      this.locations = this.dadosFiltrados;
      this.total = this.locations.length;
    })
    .catch(error => {
      console.error(error);
    });
  }

  // Função para transformar a string pego no elemento 'hora' e poder filtrá-la de forma eficiente;
  transform(estabelecimento: any[], horario: string): any[] {
    if (!estabelecimento || !horario) {
      return estabelecimento;
    }
    return estabelecimento.filter((estab) => {
      return estab.schedules.some((schedule: {
        weekdays: any; hour: { split: (arg0: string) => [any, any]; }; 
      }) => {
        if(schedule.hour.toString() !== 'Fechada' && schedule.weekdays.toString() !== 'Obs.:'){
          const [inicio, fim] = schedule.hour.split(' às ');
          const [inicioHora, inicioMinuto] = inicio.split('h');
          const [fimHora, fimMinuto] = fim.split('h');
          const [inicioFiltro, fimFiltro] = horario.split(' às ');
          const [inicioHoraFiltro, inicioMinutoFiltro] = inicioFiltro.split('h');
          const [fimHoraFiltro, fimMinutoFiltro] = fimFiltro.split('h');

          const inicioAcademia = parseInt(inicioHora);
          const fimAcademia = parseInt(fimHora);
          const inicioHorarioFiltro = parseInt(inicioHoraFiltro);
          const fimHorarioFiltro = parseInt(fimHoraFiltro);
  
          return (inicioAcademia >= inicioHorarioFiltro && inicioAcademia < fimHorarioFiltro) || (fimAcademia > inicioHorarioFiltro && fimAcademia <= fimHorarioFiltro);
        }else{
          return false;
        }
      });
    });
  }

  mudarPagina(pagina: number): void {
    this.paginaAtual = pagina;
  }
  
  // Alteração de elementos assim que pedir para filtrar a lista;
  chamadaFazerFiltro(event: { filtro: string; fechadas: boolean }): any {
    const { filtro, fechadas } = event;
    this.fechadas = fechadas;
    this.horario = filtro;
    this.locations = this.dadosFiltrados;
    this.total = this.locations.length;
    this.paginaAtual = 0;
  }
}
