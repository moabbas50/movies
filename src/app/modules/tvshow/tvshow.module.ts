import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TvshowRoutingModule } from './tvshow-routing.module';

import { PopularComponent } from './components/popular/popular.component';
import { AiringComponent } from './components/airing/airing.component';
import { OntvComponent } from './components/ontv/ontv.component';
import { ToprateComponent } from './components/toprate/toprate.component';
import { TvvComponent } from './components/tvv/tvv.component';
import { TvshComponent } from './components/tvsh/tvsh.component';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';
import { PaginatorModule } from 'primeng/paginator';
import { CommonnnModule } from '../../commonnn/commonnn.module';
@NgModule({
  declarations: [

    PopularComponent,
    AiringComponent,
    OntvComponent,
    ToprateComponent,
    TvvComponent,
    TvshComponent,

  ],
  imports: [
    CommonModule,
    CommonnnModule,
    TvshowRoutingModule,
    ButtonModule,
    CarouselModule,
    GalleriaModule,
    PaginatorModule
  ]
})
export class TvshowModule { }
