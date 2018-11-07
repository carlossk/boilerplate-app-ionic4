import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'app', loadChildren: './tabs/tabs.module#TabsPageModule' },

  { path: 'list', loadChildren: './list/list.module#ListPageModule' },
  { path: '', loadChildren: './login/login.module#LoginPageModule' },
  { path: '**', loadChildren: './login/login.module#LoginPageModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
