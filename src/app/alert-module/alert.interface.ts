export enum ALERT_TYPE {
  WARNING = 'warning',
  SUCCESS = 'success',
  DANGER = 'danger',
  INFO = 'info'
}

export interface AlertConfig {
  status: boolean;
  type: ALERT_TYPE.SUCCESS | ALERT_TYPE.DANGER | ALERT_TYPE.WARNING | ALERT_TYPE.INFO;
  message: string;
}
