import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/constants';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
  productDetails: IProduct[];
  showModal: boolean = false;
  showForm: boolean = true;
  stars: number[] = [1, 2, 3, 4, 5];
  productSpaceLargeData;
  prodVideoLargeData;
  reserveForm: FormGroup;
  submitted = false;
  @ViewChild('prodVideo',{ static: true }) prodVideo: ElementRef; 

  constructor(private route: ActivatedRoute, private fb: FormBuilder,
     private router: Router, private appService: AppService) { }

  ngOnInit() {
    this.productDetails = [];
    this.reserveForm = this.fb.group({
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      lastName: ['', [Validators.required]],
      mobileNo: ['', [Validators.required, Validators.pattern("[0-9 ]{10}")]],
      });
      this.appService.getProductList().subscribe(productData=>{
        this.productDetails = productData.filter(item=>item.productId === this.route.snapshot.params.id);
      });
  }

  get reserveFormControl() {
    return this.reserveForm.controls;
  }
  changeImage(data){
    this.productSpaceLargeData = '';
    this.prodVideoLargeData = '';
    if(data.split('.')[data.split('.').length-1] !== 'jpg'){
      this.prodVideoLargeData = data;
    }else{
      this.productSpaceLargeData = data;
    }
  }

  changeVideo(video){
   // this.productSpaceLargeData = '';
    this.prodVideoLargeData = video;
  }
  
  openModal(){
    this.showModal=!this.showModal;
    this.reserveForm.reset();
  }

  onSubmit(){
    this.showForm = false;
    setTimeout(()=>{                          
      this.showModal = false;
      this.router.navigate(['./home']);
      this.reserveForm.reset();
  }, 1500);
  }
  getGreyStars(num) {  
    var numberOfStars = Math.round(num);  
    var restStars = 5 - numberOfStars;  
    if (restStars > 0) {  
        var data = new Array(restStars);  
        for (var i = 0; i < data.length; i++) {  
            data[i] = i;  
        }  
        return data;  
    }  }

    getYellowStars(num) {  
      var numberOfStars = Math.round(num);  
      if (numberOfStars > 5)  
          numberOfStars = 5;  
      var data = new Array(numberOfStars);  
      for (var i = 0; i < data.length; i++) {  
          data[i] = i;  
      }  
      return data;  
  }  
}
