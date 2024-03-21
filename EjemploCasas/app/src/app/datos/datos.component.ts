import { Component, inject } from '@angular/core';
import { casaServicio } from '../casa.service';



@Component({
  selector: 'app-datos',
  standalone: true,
  imports: [],
  templateUrl: './datos.component.html',
  styleUrl: './datos.component.css'
})
export class DatosComponent {
  detalles=inject(casaServicio)
  nombre: string | undefined
  apellido: string | undefined
  mail: string | undefined
  constructor(){
    this.nombre=this.detalles.getNombre
    this.apellido=this.detalles.getApellido
    this.mail=this.detalles.getMail
  }
}
