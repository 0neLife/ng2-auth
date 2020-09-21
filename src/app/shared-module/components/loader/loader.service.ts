import {Inject, Injectable, Optional} from '@angular/core';
import {LOADER_POSITION, LOADER_SHAPE, LOADER_SIZE, LOADER_TYPES, LoaderConfig} from './loader.interface';

@Injectable()
export class LoaderService {
  private readonly defaultConfig: LoaderConfig;

  constructor(@Inject('loaderConfig') @Optional() private readonly config: LoaderConfig) {
    this.config = this.config || {};
    this.defaultConfig = {
      backdropBorderRadius: this.config.backdropBorderRadius || '0',
      backdropMinHeight: this.config.backdropMinHeight || 45,
      loaderShape: this.config.loaderShape || LOADER_SHAPE.BOUNCING_DOTS,
      loaderColor: this.config.loaderColor || 'rgba(80, 50, 150, .80)',
      loaderPosition: this.config.loaderPosition || LOADER_POSITION.CENTER,
      loaderSize: this.config.loaderSize || LOADER_SIZE.LG,
      type: this.config.type || LOADER_TYPES.APP,
      customClass: this.config.customClass || ''
    };
  }

  normalizeLoaderConfig(config: LoaderConfig): LoaderConfig {
    if (!config) {
      config = this.defaultConfig;
      return config;
    }
    for (const option in this.defaultConfig) {
      if (!config[option]) {
        config[option] = this.defaultConfig[option];
      }
    }
    if (Object.values(LOADER_SHAPE).findIndex((curLoaderShape: string) => curLoaderShape === config.loaderShape) === -1) {
      config.loaderShape = LOADER_SHAPE.BOUNCING_DOTS;
    }

    if (Object.values(LOADER_TYPES).findIndex((curLoaderType: string) => curLoaderType === config.type) === -1) {
      config.type = LOADER_TYPES.APP;
    }
    return config;
  }
}
