import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IProduct } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  
  public productList = new BehaviorSubject<any>(null);
  castUser = this.productList.asObservable();
  
  updateProductList(newUser){
    this.productList.next(newUser); 
  }
  
  constructor(private http: HttpClient) { 
    this.getProuctJSON().subscribe(products=>{
      this.productList.next(products);
    });
  }
 

  
getProductList(){
  return this.productList.asObservable();
}

  getProuctJSON(): Observable<any> {
    return this.http.get("../../assets/jsonData/products.json");
  }

}
