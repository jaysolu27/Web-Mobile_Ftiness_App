import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  reserveForm: FormGroup;
  submitted = false;
  @ViewChild('prodVideo',{ static: true }) prodVideo: ElementRef; 

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.productDetails = [];
    this.productDetails.push(JSON.parse(this.route.snapshot.params.productData));
    this.reserveForm = this.fb.group({
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      lastName: ['', [Validators.required]],
      mobileNo: ['', [Validators.required, Validators.pattern("[0-9 ]{10}")]],
      });

  }

  get reserveFormControl() {
    return this.reserveForm.controls;
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

  onSubmit(){
    this.showForm = false;
    setTimeout(()=>{                          
      this.showModal = false;
      this.router.navigate(['./home']);
  }, 1500);
  }
}
