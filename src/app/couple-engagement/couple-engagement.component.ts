import { Component, OnInit } from '@angular/core';

import { AppService } from '../app.service';

@Component({
  selector: 'app-couple-engagement',
  templateUrl: './couple-engagement.component.html',
  styleUrls: ['./couple-engagement.component.css']
})
export class CoupleEngagementComponent implements OnInit {
  images: String[];

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.getFamilyPortraits();
  }

  getFamilyPortraits() {
    this.appService.getCoupleAndEngagement()
      .subscribe(result => this.images = result)
  }

}
