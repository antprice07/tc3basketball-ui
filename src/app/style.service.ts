import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StyleService {

  colSize: number;

  constructor() {
    this.colSize = window.innerWidth <= 400 ? 1 : 2;
   }


}
