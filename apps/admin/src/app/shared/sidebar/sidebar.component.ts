/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  public sidebarVisible = false;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {
  };


  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {
  }


}
