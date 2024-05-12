import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { NowPlayingComponent } from './components/now-playing/now-playing.component';
import { PopularComponent } from './components/popular/popular.component';
import { TopRateComponent } from './components/top-rate/top-rate.component';
import { UpComingComponent } from './components/up-coming/up-coming.component';

const routes: Routes = [
  {path:"movie/:id",component:MoviesComponent},
  {path:"Nowplaying",component:NowPlayingComponent},
  {path:"popular",component:PopularComponent},
  {path:"TopRate",component:TopRateComponent},
  {path:"upComing",component:UpComingComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoveisRoutingModule { }
