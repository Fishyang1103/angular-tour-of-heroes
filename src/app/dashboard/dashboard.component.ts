import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  // 定義 heroes 陣列屬性
  heroes: Hero[] = [];

  // 注入 heroService
  constructor(private heroService: HeroService) { }

  // 一開始就呼叫 getHeroes
  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    // slice 擷取第 2 到 5 位英雄
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
