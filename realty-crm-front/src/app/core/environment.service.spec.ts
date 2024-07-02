import { TestBed } from '@angular/core/testing';

import { ENVIRONMENT, EnvironmentService } from './environment.service';
import { environment } from '../../environments/environment';
describe('EnvironmentService', () => {
  let service: EnvironmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [{provide: ENVIRONMENT, useValue: environment}, EnvironmentService]});
    service = TestBed.inject(EnvironmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('get environments', () => {
    expect(service.getEnvironment()).toBeDefined();
  });
});
