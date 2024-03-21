import { Injectable } from '@angular/core';
import { Casa } from './casa';
import { DatosComponent } from './datos/datos.component';

@Injectable({
  providedIn: 'root'
})
export class casaServicio {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
  nombre: string | undefined
  apellido: string | undefined;
  mail: string | undefined
  protected listaCasas: Casa[] = [
    {
      id: 0,
      nombre: 'Acme Fresh Start Housing',
      ciudad: 'Chicago',
      estado: 'IL',
      foto: `${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
      unidadesDisponibles: 4,
      wifi: true,
      lavadero: true
    },
    {
      id: 1,
      nombre: 'A113 Transitional Housing',
      ciudad: 'Santa Monica',
      estado: 'CA',
      foto: `${this.baseUrl}/brandon-griggs-wR11KBaB86U-unsplash.jpg`,
      unidadesDisponibles: 0,
      wifi: false,
      lavadero: true
    },
    {
      id: 2,
      nombre: 'Warm Beds Housing Support',
      ciudad: 'Juneau',
      estado: 'AK',
      foto: `${this.baseUrl}/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg`,
      unidadesDisponibles: 1,
      wifi: false,
      lavadero: false
    },
    {
      id: 3,
      nombre: 'Homesteady Housing',
      ciudad: 'Chicago',
      estado: 'IL',
      foto: `${this.baseUrl}/ian-macdonald-W8z6aiwfi1E-unsplash.jpg`,
      unidadesDisponibles: 1,
      wifi: true,
      lavadero: false
    },
    {
      id: 4,
      nombre: 'Happy Homes Group',
      ciudad: 'Gary',
      estado: 'IN',
      foto: `${this.baseUrl}/krzysztof-hepner-978RAXoXnH4-unsplash.jpg`,
      unidadesDisponibles: 1,
      wifi: true,
      lavadero: false
    },
    {
      id: 5,
      nombre: 'Hopeful Apartment Group',
      ciudad: 'Oakland',
      estado: 'CA',
      foto: `${this.baseUrl}/r-architecture-JvQ0Q5IkeMM-unsplash.jpg`,
      unidadesDisponibles: 2,
      wifi: true,
      lavadero: true
    },
    {
      id: 6,
      nombre: 'Seriously Safe Towns',
      ciudad: 'Oakland',
      estado: 'CA',
      foto: `${this.baseUrl}/phil-hearing-IYfp2Ixe9nM-unsplash.jpg`,
      unidadesDisponibles: 5,
      wifi: true,
      lavadero: true
    },
    {
      id: 7,
      nombre: 'Hopeful Housing Solutions',
      ciudad: 'Oakland',
      estado: 'CA',
      foto: `${this.baseUrl}/r-architecture-GGupkreKwxA-unsplash.jpg`,
      unidadesDisponibles: 2,
      wifi: true,
      lavadero: true
    },
    {
      id: 8,
      nombre: 'Seriously Safe Towns',
      ciudad: 'Oakland',
      estado: 'CA',
      foto: `${this.baseUrl}/saru-robert-9rP3mxf8qWI-unsplash.jpg`,
      unidadesDisponibles: 10,
      wifi: false,
      lavadero: false
    },
    {
      id: 9,
      nombre: 'Capital Safe Towns',
      ciudad: 'Portland',
      estado: 'OR',
      foto: `${this.baseUrl}/webaliser-_TPTXZd9mOo-unsplash.jpg`,
      unidadesDisponibles: 6,
      wifi: true,
      lavadero: true,
    }
  ];

  get getNombre(): string | undefined {
    return this.nombre;
  }
  set setSombre(value: string | undefined) {
    this.nombre = value;
  }

  get getApellido(): string | undefined {
    return this.apellido;
  }
  set setApellido(value: string | undefined) {
    this.apellido = value;
  }

  get getMail(): string | undefined {
    return this.mail;
  }
  set setMail(value: string | undefined) {
    this.mail = value;
  }

  obtenerTodasLasCasas(): Casa[] {
    return this.listaCasas;
  }

  obtenerCasaPorId(id: number): Casa | undefined {
    return this.listaCasas.find(casa => casa.id === id);
  }

  enviar(firstName: string, lastName: string, email: string) {
    this.nombre=firstName
    this.apellido=lastName
    this.mail=email
  }
}
