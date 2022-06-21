import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';

// Routes 用來定義 URL 與對應網頁的組合，此處宣告了一個陣列，用來做為路由目的地的集合
const routes: Routes = [
  // { path: '網址路徑', component: 組件 }
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  // RouterModule 模組的 forRoot 方法，就能得到一個初始化後的路由器
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
