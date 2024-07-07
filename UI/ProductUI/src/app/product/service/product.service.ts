import { Injectable } from '@angular/core';
import { AddproductModel } from '../models/add-product.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
import { environment } from '../../../environments/environment';
import { UpdateproductRequest } from '../models/update-product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  addProductService(model : AddproductModel) : Observable<void>{
    return this.http.post<void>(`${environment.apiBaseUrl}/api/Product`, model);
  }

  getAllProducts() : Observable<Product[]>{
    return this.http.get<Product[]>(`${environment.apiBaseUrl}/api/Product`);
  }

  getByProductId(id : string) : Observable<Product> {
    return this.http.get<Product>(`${environment.apiBaseUrl}/api/Product/${id}`);
  }

  updateProductById(id :string, updateProduct : UpdateproductRequest) : Observable<Product>{
    return this.http.put<Product>(`${environment.apiBaseUrl}/api/Product/${id}`,updateProduct);
  }

  deleteProduct(id : string) : Observable<Product>{
    return this.http.delete<Product>(`${environment.apiBaseUrl}/api/Product/${id}`);
  }

}
