import { Injectable } from '@angular/core';
// 因為要轉寫成 Observable 物件
import { Observable, of } from 'rxjs';
// 把假資料匯入（interface 與 陣列）
import { Hero } from './hero';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';

// @Injectable」標記，代表它是一個「可注入」的服務
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // 注入 message.service
  constructor(private messageService: MessageService) { }

  //這個 function 能回傳之前定義好的 Hero 資料
  // getHeroes(): Hero[]{
  //   return HEROES;
  // }

  // 把上面的 function 改寫成 Observable 物件
  getHeroes(): Observable<Hero[]> {
    // 取得hero陣列資料時，能新增一筆歷史紀錄在訊息陣列中
    this.messageService.add('HeroService: fetched heroes');
    // of 是將參數轉換為 Observable 物件
    return of(HEROES);
  }
}
