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

  ngOnInit(): void {
    this.chamadaApi(); // Chama fazerGet() assim que o componente é inicializado
  }

  chamadaApi(): void {
    axios.get(`${this.apiUrl}`)
      .then(response => {
        this.dadosApi = response.data;
        console.log(this.dadosApi);
      })
      .catch(error => {
        console.error(error);
      });
  }
}
