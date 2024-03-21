import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Casa } from '../casa';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-casa',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl:"casa.component.html",
  styleUrls: ['./casa.component.css'],
})

export class CasaComponent {

  @Input() casa!: Casa;

}
