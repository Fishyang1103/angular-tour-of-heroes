import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // public --> 因為等等會在外部的 html 檔中直接使用，所以不使用 private
  constructor(public messageService: MessageService) {}

  ngOnInit(): void {
  }

}
