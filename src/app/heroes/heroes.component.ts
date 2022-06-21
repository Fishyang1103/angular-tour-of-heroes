// 匯入 service
import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';
// 匯入 interface
import { Hero } from '../hero';
// 匯入 建立的模擬資料
import { HEROES } from '../mock-heroes';
// 匯入 message.service
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  //加入 hero.ts 裡面的 interface Hero，且給初始值
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  //宣告 heros = 模擬資料 (mock-heroes.ts)
  heros = HEROES

  // html 的 click 事件
  // 變數名稱: 資料型態;
  selectedHero?: Hero;
  // 被呼叫，會傳入一個 hero 物件作為參數。
  // 執行後，這個類別的「selectedHero」變數將被賦予值，才能插值到 html 檔中。
  onSelect(hero: Hero): void {
  this.selectedHero = hero;
  // messageService 執行 add 時，就會顯示括號內的字串
  this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }


  // 注入 hero.service 及 message.service
  constructor(private heroService: HeroService,private messageService: MessageService ) { }
  // 這邊的宣告是 service 的
  heroes?: Hero[];

  // 這個 function 是要呼叫 heroService 裡面的 getHeroes，取得 hero 陣列，再賦值給本列別的 heroes
  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }

  // 這邊改寫成搭配 Observable
  // 組件會開始等待 Service 回傳資料。因為要等待，所以需要進行「訂閱」，以便組件在資料到手後，能進行下一步動作，也就是 heroes 的賦值。
  getHeroes(): void {
    this.heroService.getHeroes()
    // 前面的 heroes 參數是指 HeroService 回傳 Observable 物件中的資料，Angular 會自動傳入，不必手動撰寫。接著透過「=>」符號，將這個 heroes 帶領至後方的程式流程，這裡是將其賦予給本類別的heroes資料成員。
        .subscribe(heroes => this.heroes = heroes);
  }

  // 放初始化邏輯的地方
  ngOnInit(): void {
    this.getHeroes();
  }

}
