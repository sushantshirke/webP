import { Component, OnInit } from '@angular/core';
import{DataServiceService} from '../data-service.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor(private data:DataServiceService) {
   data.showIndex = true;
   }

  ngOnInit() {
    console.log('about us');
    
  }

}
