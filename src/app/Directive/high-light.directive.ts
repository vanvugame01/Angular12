import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighLight]',
})
export class HighLightDirective {
  @Input('appHighLight') appHighLight = 'blue';
  constructor(private el: ElementRef) {
    // console.log('constructor HighLightDirective', this.appHighLight);
  }

  ngOnInit(): void {
    console.log('console HighLightDirective', this.appHighLight);
    this.el.nativeElement.style.color = this.appHighLight;
  }
}
