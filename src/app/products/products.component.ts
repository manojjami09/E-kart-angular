import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../products.service';
import { ProductCardComponent } from '../product-card/product-card.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { Product } from '../product.model';



@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule, CommonModule, ProductCardComponent,NavbarComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  filteredProducts = this.products;
  constructor(private productsService: ProductsService){}
  
  ngOnInit(): void{
    this.productsService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.filteredProducts = this.products;
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      }
    })
    // this.products = this.productsService.products;
    // this.filteredProducts = this.products;
  }
  onStockFilterChange(filter: string) {
    if (filter === 'in') {
      this.filteredProducts = this.products.filter(p => p.availabilityStatus === 'In Stock');
    } else if (filter === 'low') {
      this.filteredProducts = this.products.filter(p => p.availabilityStatus === 'Low Stock');
    } else {
      this.filteredProducts = this.products;
    }
  }
  onSearchChange(searchText: string){
    this.products = this.products.filter(product =>
      product.title.toLowerCase().includes(searchText.toLowerCase())
    );
  }


}
