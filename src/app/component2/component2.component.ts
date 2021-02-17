import { Component, OnInit } from '@angular/core';
import {MenuService} from "../menu.service";
import {Menu} from "../../models/Menu";

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  menus: Menu[] = [];

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuService.getAllUpdatedMenus();
    this.menuService.menus.subscribe((menu) => {
      this.menus = menu;
      console.log(menu);
    });
  }

  delete(menu: Menu): void {
    this.menuService.delete(menu);
  }
}
