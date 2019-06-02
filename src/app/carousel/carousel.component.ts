import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"]
})
export class CarouselComponent implements OnInit {
  images: String[];
  gallery: String;

  constructor(
    private appService: AppService,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {
    this.gallery = activatedRoute.routeConfig.path;
  }

  ngOnInit() {
    switch (this.gallery) {
      case "landscape":
        this.getLandscapeGallery();
        break;
      case "film":
        this.getFilmGallery();
        break;
      case "maternity":
        this.getMaternityGallery();
        break;
      case "night_colors":
        this.getNightColorsGallery();
        break;
      case "family_portraits":
        this.getFamilyPortraits();
        break;
    }
  }

  getLandscapeGallery() {
    this.appService
      .getLandscapeGallery()
      .subscribe(result => (this.images = result));
  }

  getFilmGallery() {
    this.appService
      .getFilmGallery()
      .subscribe(result => (this.images = result));
  }

  getMaternityGallery() {
    this.appService
      .getMaternityGallery()
      .subscribe(result => (this.images = result));
  }

  getNightColorsGallery() {
    this.appService
      .getNightColorsGallery()
      .subscribe(result => (this.images = result));
  }

  getFamilyPortraits() {
    this.appService
      .getFamilyPortraits()
      .subscribe(result => (this.images = result));
  }
}
