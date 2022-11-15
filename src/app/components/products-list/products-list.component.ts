import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  public products;

  constructor(private route: Router, private appService: AppService) { }


  ngOnInit() {
    this.appService.castUser.subscribe(data => {
      this.products = data;
    });
  }


  public navigateToDetails(product) {
    this.route.navigate(['./product-details', product.productId, {productData: JSON.stringify(product)} ]);
  }
}
