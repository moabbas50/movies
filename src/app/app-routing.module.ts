import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path:"",component:HomeComponent
  },
  {
    path:"home",component:HomeComponent
  },
  { path: 'moveis', loadChildren: () => import('./modules/moveis/moveis.module').then(m => m.MoveisModule) },
  { path: 'people', loadChildren: () => import('./modules/people/people.module').then(m => m.PeopleModule) },
  { path: 'tvshow', loadChildren: () => import('./modules/tvshow/tvshow.module').then(m => m.TvshowModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
