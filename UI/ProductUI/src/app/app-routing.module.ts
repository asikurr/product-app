import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductlistComponent } from './product/productlist/productlist.component';
import { AddproductComponent } from './product/addproduct/addproduct.component';
import { UpdateproductComponent } from './product/updateproduct/updateproduct.component';

const routes: Routes = [
  {
    path : 'admin/products',
    component : ProductlistComponent
  },
  {
    path : 'admin/product/add',
    component : AddproductComponent
  },
  {
    path : 'admin/products/:id',
    component : UpdateproductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
