import { LoaderConfig } from './loader.interface';
import {
  Directive, ComponentRef, Input, ViewContainerRef, ComponentFactoryResolver, ElementRef, Renderer2,
  OnInit, SimpleChanges, OnChanges, OnDestroy
} from '@angular/core';
import { LoaderService } from './loader.service';
import { LoaderComponent } from './loader.component';

@Directive({
  selector: '[apploader]',
  providers: [LoaderService]
})
export class LoaderDirective implements OnInit, OnChanges, OnDestroy {
  @Input('apploader') show: boolean;
  @Input() config: LoaderConfig;

  private loaderComponentRef: ComponentRef<LoaderComponent>;

  constructor(
    private el: ElementRef,
    private vcRef: ViewContainerRef,
    private cfResolver: ComponentFactoryResolver,
    private renderer: Renderer2,
    private loaderService: LoaderService
  ) {
    this.vcRef.clear();
  }

  ngOnInit(): void {
    // this.setPosition();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.show) {
      if (changes.show.currentValue) {
        this.createLoader();
      } else {
        this.destroyLoader();
      }
    }
  }
  ngOnDestroy(): void {
    this.destroyLoader();
  }

  // private setPosition(): void {
  //   const elPosition = this.el.nativeElement.style.position;
  //   if (elPosition === 'relative' || elPosition === 'absolute') {
  //     return;
  //   }
  //   this.el.nativeElement.style.position = 'relative';
  // }

  private createLoader(): void {
    const loaderCF = this.cfResolver.resolveComponentFactory(LoaderComponent);
    this.loaderComponentRef = this.vcRef.createComponent(loaderCF);
    this.config = this.loaderService.normalizeLoaderConfig(this.config);
    this.loaderComponentRef.instance.config = this.config;

    this.renderer.appendChild(
      this.vcRef.element.nativeElement,
      this.loaderComponentRef.injector.get(LoaderComponent).viewContainerRef.element.nativeElement
    );
  }

  private destroyLoader(): void {
    if (this.loaderComponentRef) {
      this.loaderComponentRef.destroy();
    }
  }

}
