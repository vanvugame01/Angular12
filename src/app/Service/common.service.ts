import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  public counter = 0;

  constructor() {}
  public binhphuong(x: number): number {
    return x * x;
  }
}
