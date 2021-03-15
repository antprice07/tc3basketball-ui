import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  isDesktop = true;

  constructor() { }

  ngOnInit(): void {
    this.isDesktop = window.innerWidth <= 650 ? false:true;
  }

}
