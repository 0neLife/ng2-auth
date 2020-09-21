import {Injectable} from '@angular/core';
import {AlertConfig} from './alert.interface';

@Injectable()
export class AlertService {
  private _alertConfig: AlertConfig = null;
  private _timer: any;

  public get alertConfig(): AlertConfig {
    return this._alertConfig;
  }

  public setAlertConfig(config: AlertConfig): void {
    this._alertConfig = config;
    this.clearSetTimeout();
    this.startSetTimeout();
  }

  public startSetTimeout(): void {
    this._timer = setTimeout(() => {
      this.setAlertConfig(null);
    }, 5000);
  }

  public clearSetTimeout(): void {
    clearTimeout(this._timer);
  }
}
