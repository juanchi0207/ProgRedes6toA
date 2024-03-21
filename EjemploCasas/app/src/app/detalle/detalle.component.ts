import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { casaServicio } from '../casa.service';
import { Casa } from '../casa';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: "./detalle.component.html",
  styleUrls: ['./detalle.component.css'],
})
export class DetalleComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  servicio = inject(casaServicio);
  casa: Casa | undefined;

  applyForm = new FormGroup({
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    email: new FormControl('')
  });

  constructor() {
    const idCasa = parseInt(this.route.snapshot.params['id'], 10);
    this.casa = this.servicio.obtenerCasaPorId(idCasa);
  }

  submitApplication() {
    this.servicio.enviar(
      this.applyForm.value.nombre ?? '',
      this.applyForm.value.apellido ?? '',
      this.applyForm.value.email ?? ''
    );
  }

}
