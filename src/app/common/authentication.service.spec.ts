import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import { HttpTestingController } from "@angular/common/http/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import {HttpClient} from "@angular/common/http";

describe('AuthenticationService', () => {
  let service: AuthenticationService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(AuthenticationService);
    httpMock = TestBed.get(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
