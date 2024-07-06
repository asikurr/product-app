import { Injectable } from '@angular/core';
import { AddproductModel } from '../models/add-product.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  addProductService(model : AddproductModel) : Observable<void>{
    return this.http.post<void>('https://localhost:7031/api/Product', model);
  }
}
