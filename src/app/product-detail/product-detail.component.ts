import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { Product } from '../product.model';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { StockHighlightDirective } from '../stock-highlight.directive';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, NavbarComponent,StockHighlightDirective],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [ProductsService]
})
export class ProductDetailComponent implements OnInit {
  product!: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
    const id = Number(params.get('id'));
    console.log('Product ID:', id);

    this.productsService.getProducts().subscribe(products => {
      this.product = products.find(p => p.id === id);
    });
  });
  }
  expandedId: number | null = null;

  toggleDescription(id: number) {
    this.expandedId = this.expandedId === id ? null : id;
  }
}
