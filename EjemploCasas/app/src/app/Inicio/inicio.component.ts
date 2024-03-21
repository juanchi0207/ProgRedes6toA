import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CasaComponent } from '../casa/casa.component';
import { Casa } from '../casa';
import { casaServicio } from '../casa.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    CommonModule,
    CasaComponent
  ],
  templateUrl: "./inicio.component.html",
  styleUrls: ['./inicio.component.css'],
})

export class InicioComponent {
  listaCasas: Casa[] = [];
  servicio: casaServicio = inject(casaServicio);
  resultados: Casa[] = [];
  constructor() {
    this.listaCasas = this.servicio.obtenerTodasLasCasas();
    this.resultados = this.listaCasas;
  }
  filtrarResultados(text: string) {
    if (!text) {
      this.resultados = this.listaCasas;
      return;
    }
    this.resultados = this.listaCasas.filter(
      casaActual => casaActual?.ciudad.toLowerCase().includes(text.toLowerCase())
    );
  }
  onSubmit(e: { preventDefault: () => void; }, texto:string){
    if (e) e.preventDefault();
    this.filtrarResultados(texto);
    }
}
