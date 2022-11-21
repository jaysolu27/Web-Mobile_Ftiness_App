import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/constants';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  public products:IProduct[];

  constructor(private route: Router, private appService: AppService) { 
  }


  ngOnInit() {
   this.getProducts();
  }

  private getProducts(){
    this.appService.getProductList().subscribe(data => {
      this.products = data;
    });
  }

  public navigateToDetails(product) {
    this.route.navigate(['./product-details', product.productId, {productData: JSON.stringify(product)} ]);
  }

  public productInputChange(searchInput){
    if(!searchInput.trim(' ')) {
      return this.getProducts();
  }
   searchInput = searchInput.toLowerCase();
   this.products=this.products.filter(x =>x.productName.toLowerCase().includes(searchInput))
  };
}
