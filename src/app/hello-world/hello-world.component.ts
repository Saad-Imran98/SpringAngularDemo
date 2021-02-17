import {Component, Inject, OnInit} from '@angular/core';
import {Menu} from "../../models/Menu";
import {MenuService} from "../menu.service";

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  constructor(private menuService: MenuService) { }

  menus: Menu[] = [];

  ngOnInit(): void {
    this.menuService.getAllUpdatedMenus();
    this.menuService.menus.subscribe((menu) => {
      this.menus = menu;
      console.log(menu);
    });
  }

}
