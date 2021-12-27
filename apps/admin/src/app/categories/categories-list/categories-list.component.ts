import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'redbits-categories-list',
  templateUrl: './categories-list.component.html',
  styles: [
  ]
})
export class CategoriesListComponent implements OnInit {

  Categories = [
    {
      Id: 1,
      Name: 'Shubham',
      Icon: 'icon-1'
    },
    {
      Id: 2,
      Name: 'Abhishek',
      Icon: 'icon-2'
    },
    {
      Id: 3,
      Name: 'Yamesh',
      Icon: 'icon-3'
    },
    {
      Id: 4,
      Name: 'Janaki',
      Icon: 'icon-4'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
