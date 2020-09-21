import {Component, Input, OnInit, ViewChild, ElementRef, OnChanges, SimpleChanges} from '@angular/core';
import {icons} from '../icons-strorage';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.sass']
})
export class SvgComponent implements OnInit, OnChanges {

  @Input() name: string;
  @ViewChild('nameOfSvg', {static: true}) nameOfSvg: ElementRef;

  constructor() { }

  ngOnInit() {
    this.nameOfSvg.nativeElement.innerHTML = icons[this.name];
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    this.nameOfSvg.nativeElement.innerHTML = icons[simpleChanges.name.currentValue];
  }

}
