import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[scrollAnimate]',
  standalone: true
})
export class ScrollAnimateDirective implements OnInit, OnDestroy {
  @Input('scrollAnimate') animationClass = 'animate';
  private observer!: IntersectionObserver;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // Estado inicial oculto
    this.renderer.addClass(this.el.nativeElement, 'before-animate');

    // Configurar IntersectionObserver
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.renderer.addClass(this.el.nativeElement, this.animationClass);
            this.renderer.removeClass(this.el.nativeElement, 'before-animate');
            this.observer.unobserve(this.el.nativeElement);
          }
        });
      },
      { threshold: 0.15 } // se activa cuando el 15% del elemento es visible
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) this.observer.disconnect();
  }
}
