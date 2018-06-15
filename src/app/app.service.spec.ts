import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { AppService } from './app.service';

let httpClientSpy: { get: jasmine.Spy };

describe('AppService', () => {
  let appService: AppService;
  let httpClient: HttpClient;
  let httpMock: HttpTestingController;

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
    httpClient = TestBed.get(HttpClient);
    httpMock = TestBed.get(HttpTestingController);
  });
  
  afterEach(() => {
    httpMock.verify();
  })

  it('should be created', inject([AppService], (service: AppService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getFilmGallery', () => {
    let expectedImages: String[];

    it('should return expected film images (called once)', () => {
      const dummyImages: String[] = [
        'A', 'B', 'C'
      ]

      appService.getFilmGallery().subscribe(
        images => expect(images).toEqual(dummyImages, 'should return expected images')
    )
      const req = httpMock.expectOne('http://localhost:3000/api/gallery_film');
      req.flush(dummyImages);
  });

    it('should be OK returning no images', () => {
      const dummyImages: String[] = []

      appService.getFilmGallery().subscribe(
        images => expect(images.length).toEqual(0, 'should have empty images array')
      );

      const req = httpMock.expectOne('http://localhost:3000/api/gallery_film');
      expect(req.request.method).toBe('GET');
      req.flush(dummyImages); // Respond with no images
    });

    // This service reports the error but finds a way to let the app keep going.
    it('should turn 404 into an empty images result', () => {
      const dummyImages: String[] = []

      appService.getFilmGallery().subscribe(
        images => expect(images.length).toEqual(0, 'should return empty images array')
      );

      const req = httpMock.expectOne('http://localhost:3000/api/gallery_film');
      expect(req.request.method).toBe('GET');

      // respond with a 404 and the error message in the body
      req.flush(dummyImages, {status: 404, statusText: 'Not Found'});
    });

  });

  describe('#getLandscapeGallery', () => {

    it('should return expected landscape images (called once)', () => {
      const dummyImages: String[] = [
        'A', 'B', 'C'
      ]

      appService.getLandscapeGallery().subscribe(
        images => expect(images).toEqual(dummyImages, 'should return expected images')
    )
      const req = httpMock.expectOne('http://localhost:3000/api/gallery_landscape');
      req.flush(dummyImages);
  });

    it('should be OK returning no images', () => {
      const dummyImages: String[] = []

      appService.getLandscapeGallery().subscribe(
        images => expect(images.length).toEqual(0, 'should have empty images array')
      );

      const req = httpMock.expectOne('http://localhost:3000/api/gallery_landscape');
      expect(req.request.method).toBe('GET');
      req.flush(dummyImages); // Respond with no images
    });

    // This service reports the error but finds a way to let the app keep going.
    it('should turn 404 into an empty images result', () => {
      const dummyImages: String[] = []

      appService.getLandscapeGallery().subscribe(
        images => expect(images.length).toEqual(0, 'should return empty images array')
      );

      const req = httpMock.expectOne('http://localhost:3000/api/gallery_landscape');
      expect(req.request.method).toBe('GET');

      // respond with a 404 and the error message in the body
      req.flush(dummyImages, {status: 404, statusText: 'Not Found'});
    });

  });

});
