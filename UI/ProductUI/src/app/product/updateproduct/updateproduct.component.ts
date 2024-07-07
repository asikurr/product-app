import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from '../service/product.service';
import { Product } from '../models/product.model';
import { UpdateproductRequest } from '../models/update-product.model';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrl: './updateproduct.component.css'
})
export class UpdateproductComponent implements OnInit, OnDestroy {
  id : string | null = null;
  proModel? : Product;
  paramSubscription? : Subscription;
  productSubscription? : Subscription;
  updateSubscription? : Subscription;
  deleteSubscription? : Subscription;
  constructor(private route : ActivatedRoute,private router : Router, private productService : ProductService){}

  ngOnInit(): void {
    this.paramSubscription = this.route.paramMap.subscribe({
      next : param =>{
        this.id = param.get('id');
      }
    })

    if (this.id) {
      this.productSubscription = this.productService.getByProductId(this.id)
      .subscribe({
        next : response => {
          this.proModel = response;
        }
      })
    }

  }

  onSubmitUpdate(){
    const updateproduct : UpdateproductRequest = {
        name : this.proModel?.name ?? '',
        description : this.proModel?.description ?? '',
        price : this.proModel?.price ?? 0,
        quantity : this.proModel?.quantity ?? 0
    };
   if (this.id) {
    this.updateSubscription = this.productService.updateProductById(this.id, updateproduct)
    .subscribe({
      next : response =>{
        this.router.navigateByUrl('admin/products')
      }
    })
   }



  }

  onDeleteProduct() : void {
    if (this.id) {
      this.deleteSubscription = this.productService.deleteProduct(this.id)
      .subscribe({
        next : response =>{
          this.router.navigateByUrl('admin/products')
        }
      })
     }
  }

  ngOnDestroy(): void {
    this.paramSubscription?.unsubscribe();
    this.productSubscription?.unsubscribe();
    this.updateSubscription?.unsubscribe();
    this.deleteSubscription?.unsubscribe();
  }


}
