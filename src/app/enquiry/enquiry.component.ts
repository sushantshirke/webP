import { Component, OnInit } from '@angular/core';
import{DataServiceService} from '../data-service.service';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit {

  constructor(private data:DataServiceService) {
    data.showIndex = true;
    }

  ngOnInit() {
  }

}
