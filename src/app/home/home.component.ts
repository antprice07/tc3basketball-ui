import { Component, OnInit } from '@angular/core';
import { StyleService } from '../style.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  dynamicColSize: number;
  dynamicRowHeight: string;


  constructor(private styleSvc: StyleService) {}

  ngOnInit(): void {
    this.dynamicColSize = this.styleSvc.colSize;
    this.dynamicRowHeight = window.innerWidth <= 600 ? "50vh" : "60vh";
  }

  onResize(event) {
    this.dynamicColSize = event.target.innerWidth <= 400 ? 1 : 2;
    this.dynamicRowHeight = window.innerWidth <= 600 ? "50vh" : "60vh";
  }
}
