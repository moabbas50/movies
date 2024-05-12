import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TvshowRoutingModule } from './tvshow-routing.module';

import { PopularComponent } from './components/popular/popular.component';
import { AiringComponent } from './components/airing/airing.component';
import { OntvComponent } from './components/ontv/ontv.component';
import { ToprateComponent } from './components/toprate/toprate.component';


@NgModule({
  declarations: [
  
    PopularComponent,
    AiringComponent,
    OntvComponent,
    ToprateComponent
  ],
  imports: [
    CommonModule,
    TvshowRoutingModule
  ]
})
export class TvshowModule { }
