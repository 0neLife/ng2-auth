import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AlertComponent} from './alert.component';
import {AlertService} from './alert.service';
import {SharedModule} from '../shared-module/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AlertComponent
  ],
  exports: [AlertComponent],
  imports: [
    CommonModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [AlertService]
})
export class AlertModule { }
