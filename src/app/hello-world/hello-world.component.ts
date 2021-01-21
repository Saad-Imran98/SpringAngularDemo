import {Component, Inject, OnInit} from '@angular/core';
import {SpringService} from '../spring.service';
import {Observable} from 'rxjs';
import {Message} from '../models/Message';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  constructor(private springService: SpringService) { }

  messages: Message[] = [];

  ngOnInit(): void {
    this.springService.getMessage().subscribe(data => {
      this.messages = data;
    });
  }

}
