import { Component, OnInit, OnDestroy } from '@angular/core';
import {AlertService} from './alert.service';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import {Subject} from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';
import {IconsStorage} from '../shared-module/icons/icons.interface';
import {ALERT_TYPE, AlertConfig} from './alert.interface';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.sass'],
  animations: [
    trigger(
      'alertAnimation', [
        transition(':enter', [
          style({transform: 'translateY(100%)', opacity: 0}),
          animate('300ms', style({transform: 'translateY(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateY(0)', opacity: 1}),
          animate('300ms', style({transform: 'translateY(100%)', opacity: 0}))
        ])
      ]
    )
  ],
})
export class AlertComponent implements OnInit, OnDestroy {
  public ALERT_TYPE = ALERT_TYPE;
  public CLOSE_ICON: IconsStorage = IconsStorage.CLOSE_ICON;
  public get alertConfig(): AlertConfig {
    return this.alertService.alertConfig;
  }

  private onComponentDestroy$: Subject<void> = new Subject();
  constructor(private alertService: AlertService,
              private router: Router) {
  }

  public ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event: RouterEvent): event is NavigationEnd => {
          return event instanceof NavigationEnd;
        }),
        takeUntil(this.onComponentDestroy$)
      ).subscribe((): void => {
        if (this.alertService.alertConfig) {
          this.alertService.setAlertConfig(null);
        }
      });
  }

  public ngOnDestroy(): void {
    this.onComponentDestroy$.next();
    this.onComponentDestroy$.complete();
    this.onComponentDestroy$.unsubscribe();
  }

  public closeAlert(): void {
    this.alertService.setAlertConfig(null);
  }
}
