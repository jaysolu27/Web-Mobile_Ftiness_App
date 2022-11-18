import { Component, ElementRef, EventEmitter, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from './constants';
import { AppService } from './services/app.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fitnessClubApp';
  products: IProduct[];
  productInput: string;
  constructor(private appService: AppService, public _loc: Location){
    this.appService.castUser.subscribe(data => {
      this.products = data;
    });
  }
  searchProduct(){
    var serchedItem = this.products.find(item=>item.productName.toLowerCase() === this.productInput.toLowerCase())
    this.appService.productList.next(serchedItem)
  }
  
}
