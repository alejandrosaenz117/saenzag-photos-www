import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { AppService } from './app.service';

let httpClientSpy: { get: jasmine.Spy };

describe('AppService', () => {
  let appService: AppService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AppService
      ],
      imports: [
        HttpClientTestingModule
      ]
    });
    appService = TestBed.get(AppService);
    // Inject the http, test controller, and service-under-test
    // as they will be referenced by each test.
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });



  it('should be created', inject([AppService], (service: AppService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getFilmGallery', () => {
    let expectedImages: String[];

    beforeEach(() => {
      appService = TestBed.get(AppService);
      expectedImages= ['A'] as String[];
    });

    it('should return expected film images (called once)', () => {

      appService.getFilmGallery().subscribe(
        images => expect(images).toEqual(expectedImages, 'should return expected images'),
        fail
    )});

    it('should be OK returning no images', () => {

      appService.getFilmGallery().subscribe(
        images => expect(images.length).toEqual(0, 'should have empty images array'),
        fail
      );

      const req = httpTestingController.expectOne('http://localhost:3000/api/gallery_film');
      req.flush([]); // Respond with no heroes
    });

        // This service reports the error but finds a way to let the app keep going.
        it('should turn 404 into an empty heroes result', () => {

          appService.getFilmGallery().subscribe(
            images => expect(images.length).toEqual(0, 'should return empty heroes array'),
            fail
          );
    
          const req = httpTestingController.expectOne('http://localhost:3000/api/gallery_film');
    
          // respond with a 404 and the error message in the body
          const msg = 'deliberate 404 error';
          req.flush(msg, {status: 404, statusText: 'Not Found'});
        });

  })
});
