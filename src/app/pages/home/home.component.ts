import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  query,
  stagger,
} from '@angular/animations';
import { ScrollAnimateDirective } from '../shared/directives/scroll-animate.directive';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [ScrollAnimateDirective],
  styleUrls: ['./home.component.css'],
  animations: [
    // Animación para el título
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(40px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),

    // Animación para el párrafo y enlace
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1200ms ease-in', style({ opacity: 1 }))
      ])
    ]),

    // Animación con retardo entre elementos (tarjetas)
    trigger('staggerFadeIn', [
      transition(':enter', [
        query('li', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(200, [
            animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ])
      ])
    ])
  ]
})
export class HomeComponent {}
