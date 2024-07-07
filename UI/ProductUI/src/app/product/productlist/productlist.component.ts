import { Component} from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../service/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css',
})
export class ProductlistComponent {
  products$?: Observable<Product[]>;
  id: string | null = null;

  constructor(
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.products$ = this.productService.getAllProducts();
   
  }

}
