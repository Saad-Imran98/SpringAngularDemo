import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Menu} from "../models/Menu";
import {BehaviorSubject, Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menuSubject = new BehaviorSubject<Menu[]>(new Array<Menu>());
  menus = this.menuSubject.asObservable();

  constructor(private httpClient: HttpClient) { }

  getAllUpdatedMenus(): void {
    this.httpClient.get<Menu[]>('http://localhost:3000/menu')
      .subscribe((menuList) => {
        this.menuSubject.next(menuList);
      });
  }

  delete(menu: Menu): void {
    this.httpClient.delete<Menu[]>(`http://localhost:3000/menu/${menu.id}`)
      .subscribe((menuList) => {
        this.menuSubject.next(menuList);
      });
  }
}
