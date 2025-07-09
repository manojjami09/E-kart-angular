import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { get } from 'http';
import { map, Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) { }

      getProducts(): Observable <Product[]> {
        return this.http.get<{ products: Product[] }>(this.apiUrl).pipe(
          map((response) => response.products)
      );
    
  }

 



}
