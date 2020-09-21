import {Component, Input, OnInit, ViewContainerRef} from '@angular/core';
import {LOADER_SHAPE, LoaderConfig} from './loader.interface';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.sass']
})
export class LoaderComponent implements OnInit {
  @Input() public config: LoaderConfig;

  public LOADER_SHAPE = LOADER_SHAPE;

  constructor(public viewContainerRef: ViewContainerRef) {
  }

  ngOnInit(): void {
  }
}
