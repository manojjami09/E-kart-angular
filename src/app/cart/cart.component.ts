import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  imports: [FormsModule,CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  @Input() cartItems: {id: number, title: string, price: number, description: string, category: string,brand: string, availabilityStatus:string, stock:number,images: string[]}[]=[];
  
  cartLength!: number;
  
  ngOnChanges() {
    this.cartLength = this.cartItems.length;
  }
}
