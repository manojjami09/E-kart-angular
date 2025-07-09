import { Component,Input, OnInit } from '@angular/core'; // Update the path as needed to the actual location of Product
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CartComponent } from '../cart/cart.component';
import { StockHighlightDirective } from '../stock-highlight.directive';
import { ZoomDirective } from '../zoom.directive';
import { Product } from '../product.model';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [FormsModule,CommonModule,CartComponent, StockHighlightDirective,ZoomDirective, RouterModule, RouterLink, RouterOutlet],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent{
    searchText: string = '';
    showFull: boolean = false;

    constructor(private router: Router) {}

    @Input() products: Product[] = [];
    
    cartItems: Product[] = [];
    showCart: boolean = false;
    
    addToCart(product: any){
      this.cartItems.push(product)
    }

    onToggleCart() {
      this.showCart = !this.showCart;
    }
    
    expandedId: number | null = null;

    toggleDescription(id: number) {
      this.expandedId = this.expandedId === id ? null : id;
    }

    // goToProduct(id: number) {
    //   this.router.navigate(['/products', id]);
    // }


}
