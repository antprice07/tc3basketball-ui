import { Component, OnInit } from '@angular/core';
import { StyleService } from '../style.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  dynamicCol: number;
  dynamicRow: string;
  dynamicGutter: string;

  constructor(private styleSvc: StyleService
  ) { }

  ngOnInit(): void {
    this.dynamicCol = this.styleSvc.colSize;
    this.dynamicRow = window.innerWidth >= 650 ? '850px' : '600px';
    this.dynamicGutter = window.innerWidth >= 650 ? '8px' : '0';
  }

}
