import { Component, OnInit } from '@angular/core';
import { StyleService } from '../style.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  dynamicColSize: number;

  constructor(private styleSvc: StyleService) {}

  ngOnInit(): void {
    this.dynamicColSize = this.styleSvc.colSize;
  }

  onResize(event) {
    this.dynamicColSize = event.target.innerWidth <= 400 ? 1 : 2;
  }
}
