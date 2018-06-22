import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-family-portrait',
  templateUrl: './family-portrait.component.html',
  styleUrls: ['./family-portrait.component.css']
})
export class FamilyPortraitComponent implements OnInit {
  images: String[];

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getFamilyPortraits().subscribe(result => this.images = result);
  }

}
