import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer, MatDrawerContainer, MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'TC3 Basketball';
  sideBarWidth: number;
  sideBarTextAlign: string;
  isHandsetLayout = false;
  @ViewChild("drawer") drawer: MatDrawer;
  
  constructor(breakPointObserver: BreakpointObserver) {
    breakPointObserver.observe([
      Breakpoints.HandsetLandscape, Breakpoints.HandsetPortrait
    ]).subscribe(res => {
      if (res.matches) {
        this.isHandsetLayout = true;
      }
    })
  }

  close() {
    this.drawer.close()
  }

  ngOnInit(): void {
    
  }

  setStyles() {
    let styles = {
      'width': window.innerWidth <= 400 ? '100%' : '10%',
    };
    return styles;
  }
}
