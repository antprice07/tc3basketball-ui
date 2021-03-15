import { Component, OnInit } from '@angular/core';
import { StyleService } from '../style.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {

  dynamicColWidth: number;
  dynamicRowHeight: string;

  constructor(private styleSvc: StyleService) { }

  ngOnInit(): void {
    this.dynamicColWidth = this.styleSvc.colSize;
    this.dynamicRowHeight = window.innerWidth <= 650 ? "60vh" : "80vh"
  }

}
