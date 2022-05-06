import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { HttpTestingController } from "@angular/common/http/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import {HttpClient} from "@angular/common/http";

describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(DataService);
    httpMock = TestBed.get(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
