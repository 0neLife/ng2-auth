export enum LOADER_SHAPE {
  CHASING_DOTS = 'chasingDots',
  BOUNCING_DOTS = 'bouncingDots'
}

export enum LOADER_TYPES {
  APP = 'app',
  SECTION = 'section'
}

export enum LOADER_POSITION {
  CENTER = 'center',
  LEFT= 'left',
  RIGHT = 'right',
  TOP = 'top',
  BOTTOM = 'bottom',
  TOP_RIGHT = 'top-right',
  TOP_LEFT = 'top-left',
  BOTTOM_RIGHT = 'bottom-right',
  BOTTOM_LEFT = 'bottom-left'
}

export enum LOADER_SIZE {
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl'
}

export interface LoaderConfig {
  backdropBorderRadius?: string;
  backdropMinHeight?: number;
  customClass?: string;
  loaderShape?: LOADER_SHAPE.BOUNCING_DOTS | LOADER_SHAPE.CHASING_DOTS;
  loaderColor?: string;
  loaderPosition?: LOADER_POSITION.CENTER | LOADER_POSITION.LEFT | LOADER_POSITION.RIGHT | LOADER_POSITION.BOTTOM | LOADER_POSITION.TOP | LOADER_POSITION.TOP_LEFT | LOADER_POSITION.TOP_RIGHT | LOADER_POSITION.BOTTOM_LEFT | LOADER_POSITION.BOTTOM_RIGHT;
  loaderSize?: LOADER_SIZE.XS | LOADER_SIZE.SM | LOADER_SIZE.MD | LOADER_SIZE.LG | LOADER_SIZE.XL;
  type?: LOADER_TYPES.APP | LOADER_TYPES.SECTION;
}

export const LOADER_CONFIG_BUTTON: LoaderConfig = {
  type: LOADER_TYPES.SECTION,
  loaderSize: LOADER_SIZE.SM,
  loaderShape: LOADER_SHAPE.CHASING_DOTS,
  customClass: 'button-loader',
  loaderPosition: LOADER_POSITION.LEFT,
  backdropMinHeight: 30
};
