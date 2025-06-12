import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../products.service';
import { ProductCardComponent } from '../product-card/product-card.component';
import { NavbarComponent } from '../navbar/navbar.component';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule, CommonModule, ProductCardComponent,NavbarComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products:{id: number, title: string, price: number, description: string, category: string,brand: string, availabilityStatus:string, stock:number,images: string[] }[] =[];
  filteredProducts = this.products;
  constructor(private productsService: ProductsService){}
  ngOnInit(): void{

    this.products = this.productsService.products;
    this.filteredProducts = this.products;
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
