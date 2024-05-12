import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopularComponent } from './components/popular/popular.component';
import { AiringComponent } from './components/airing/airing.component';
import { OntvComponent } from './components/ontv/ontv.component';
import { ToprateComponent } from './components/toprate/toprate.component';
import { TvshComponent } from './components/tvsh/tvsh.component';

const routes: Routes = [
  {path:"tvshow/:id",component:TvshComponent},
  {path:"popular",component:PopularComponent},
  {path:"airing",component:AiringComponent},
  {path:"ontv",component:OntvComponent},
  {path:"toprate",component:ToprateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TvshowRoutingModule { }
