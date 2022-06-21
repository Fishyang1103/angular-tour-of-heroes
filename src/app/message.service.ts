import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  // 存放訊息的地方，本次功能所需要的歷史紀錄
  messages: string[] = [];

  // 接受字串參數
  add(message: string): void {
    // message 會加到 messages 裡面
    this.messages.push(message);
  }

  // 重新賦予一個空陣列，來覆蓋掉 messages 的資料
  clear(): void {
    this.messages = [];
  }

}
