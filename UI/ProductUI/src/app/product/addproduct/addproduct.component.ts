import { Component, OnDestroy } from '@angular/core';
import { AddproductModel } from '../models/add-product.model';
import { ProductService } from '../service/product.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent implements OnDestroy {

  productModel : AddproductModel;
  private productSubscription? : Subscription;
  
  constructor(private productService : ProductService,
    private router : Router
  ){
    this.productModel = {
      name : "samsung",
      description : 'galaxy s24 ultra',
      price : 0,
      quantity : 0
    }
  }

  onSubmit(){

    this.productSubscription = this.productService.addProductService(this.productModel)
   .subscribe({
    next : (response) =>{
      this.router.navigateByUrl('admin/products');
    }
   })
  }

  ngOnDestroy(): void {
    this.productSubscription?.unsubscribe();
  }

}
