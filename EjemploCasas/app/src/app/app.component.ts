import { Component } from '@angular/core';
import { InicioComponent } from './Inicio/inicio.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    InicioComponent,
    RouterLink,
    RouterOutlet,
    FormsModule
    ],
  templateUrl:"app.component.html",
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Casas';
}
