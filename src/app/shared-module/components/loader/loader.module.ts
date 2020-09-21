import { LoaderConfig } from './loader.interface';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader.component';
import { LoaderDirective } from './loader.directive';

@NgModule({
  declarations: [
    LoaderComponent,
    LoaderDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoaderDirective
  ],
  entryComponents: [
    LoaderComponent
  ]
})
export class LoaderModule {
  static forRoot(globalConfig: LoaderConfig): ModuleWithProviders<LoaderModule> {
    return {
      ngModule: LoaderModule,
      providers: [{ provide: 'loaderConfig', useValue: globalConfig }]
    };
  }
}
