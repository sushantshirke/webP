import { Component, OnInit } from '@angular/core';
import{DataServiceService} from '../data-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private data:DataServiceService) {
    data.showIndex = true;
    }

  ngOnInit() {
  }

}
