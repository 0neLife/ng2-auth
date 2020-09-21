// modules ---------------------------------------------
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderModule } from './components/loader/loader.module';

// components ---------------------------------------------
import { SvgComponent } from './icons/svg/svg.component';

const EXPORT_MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  LoaderModule
];

@NgModule({
  declarations: [
    SvgComponent
  ],
  imports: [...EXPORT_MODULES],
  exports: [
    ...EXPORT_MODULES,
    SvgComponent
  ]
})
export class SharedModule {
}
