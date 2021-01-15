import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  items: NbMenuItem[] = [
    {
      title: 'Home',
      url: '/',
      icon: 'home-outline',
    },
    {
      title: 'About Us',
      url: '/about-us',
      icon: 'people-outline',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
