import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared-module/shared.module';
import { FirstPageComponent } from './first-page.component';


@NgModule({
  declarations: [FirstPageComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class FirstPageModule { }
