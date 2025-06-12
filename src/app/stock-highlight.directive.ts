import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appStockHighlight]'
})
export class StockHighlightDirective implements OnChanges {

  @Input('appStockHighlight') stock: number = 0; 
  renderer: any;

  constructor() { }

  @HostBinding('style.color') color: string = '';

  ngOnChanges() {
    

    if (this.stock > 20) {
      this.color = 'green';
    } else if (this.stock >= 10) {
      this.color = 'orange';
    } else {
      this.color = 'red';
    }
    
}
}
