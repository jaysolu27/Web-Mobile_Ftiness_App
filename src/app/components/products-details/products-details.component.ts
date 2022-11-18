import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/constants';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
  productDetails: IProduct[];
  showModal: boolean = false;
  showForm: boolean = true;
  productSpaceLargeData;
  prodVideoLargeData;

  @ViewChild('prodVideo',{ static: true }) prodVideo: ElementRef; 
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.productDetails = [];
    this.productDetails.push(JSON.parse(this.route.snapshot.params.productData));
  }

  changeImage(img){
    this.prodVideoLargeData = '';
    this.prodVideo.nativeElement.pause();
    this.productSpaceLargeData = img;
  }

  changeVideo(video){
    this.productSpaceLargeData = '';
    this.prodVideoLargeData = video;
  }
  
  openModal(){
    this.showModal=!this.showModal;
  }

  submit(){
    this.showForm = false;
  }
}
