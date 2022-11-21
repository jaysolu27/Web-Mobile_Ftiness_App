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
  showHide = false;
  constructor( public _loc: Location){
    }
    sidebarDisplay(){
      this.showHide = !this.showHide;
    } 
}
