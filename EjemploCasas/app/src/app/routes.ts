import { Routes } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { InicioComponent } from './Inicio/inicio.component';

const routeConfig: Routes = [
  {
    path: '', // al no poner ruta, arranca mostrandose el componente
    component: InicioComponent,
    title: 'Pagina Inicio'
  },
  {
    path: 'detalle/:id',
    component: DetalleComponent,
    title: 'Detalle'
  }
];

export default routeConfig;
