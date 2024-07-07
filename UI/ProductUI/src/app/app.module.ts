import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopmenuComponent } from './component/topmenu/topmenu.component';
import { AddproductComponent } from './product/addproduct/addproduct.component';
import { ProductlistComponent } from './product/productlist/productlist.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdateproductComponent } from './product/updateproduct/updateproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    TopmenuComponent,
    AddproductComponent,
    ProductlistComponent,
    UpdateproductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
