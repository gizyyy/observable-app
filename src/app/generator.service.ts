import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeneratorService {
  source = interval(1000);

  constructor() {}
}
