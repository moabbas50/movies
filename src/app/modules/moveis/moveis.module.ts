import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoveisRoutingModule } from './moveis-routing.module';
import { PopularComponent } from './components/popular/popular.component';
import { NowPlayingComponent } from './components/now-playing/now-playing.component';
import { UpComingComponent } from './components/up-coming/up-coming.component';
import { TopRateComponent } from './components/top-rate/top-rate.component';
import { MovieComponent } from './components/movie/movie.component';
import { MoviesComponent } from './components/movies/movies.component';

import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';
import { PaginatorModule } from 'primeng/paginator';
import { CommonnnModule } from '../../commonnn/commonnn.module';





@NgModule({
  declarations: [


    PopularComponent,
    NowPlayingComponent,
    UpComingComponent,
    TopRateComponent,
    MovieComponent,
    MoviesComponent,

  ],
  imports: [
    CommonModule,
    CommonnnModule,
    MoveisRoutingModule,
    ButtonModule,
    CarouselModule,
    GalleriaModule,
    PaginatorModule
  ]
})
export class MoveisModule { }
