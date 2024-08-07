import { Inject, Injectable, InjectionToken, Optional, } from '@angular/core';
import { Environment } from './environment';
export const ENVIRONMENT = new InjectionToken<Environment>('environments');

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  private readonly environment: Environment;

  constructor(@Optional() @Inject(ENVIRONMENT) environment: Environment) {
    this.environment = environment;
  }

  public getEnvironment(): Environment {
    return this.environment;
  }
}
