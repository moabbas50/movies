import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoveisRoutingModule } from './moveis-routing.module';
import { PopularComponent } from './components/popular/popular.component';
import { NowPlayingComponent } from './components/now-playing/now-playing.component';
import { UpComingComponent } from './components/up-coming/up-coming.component';
import { TopRateComponent } from './components/top-rate/top-rate.component';



@NgModule({
  declarations: [

  
    PopularComponent,
        NowPlayingComponent,
        UpComingComponent,
        TopRateComponent
  ],
  imports: [
    CommonModule,
    MoveisRoutingModule
  ]
})
export class MoveisModule { }
