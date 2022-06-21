import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  // 讓外部的組件輸入資料進來，並宣告 Hero 物件
  @Input() hero?: Hero;

  constructor() { }

  ngOnInit(): void {
  }

}
