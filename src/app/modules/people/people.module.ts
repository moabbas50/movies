import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { PopularpepComponent } from './components/popularpep/popularpep.component';
import { PeofilepeopleComponent } from './components/peofilepeople/peofilepeople.component';
import { CarouselModule } from 'primeng/carousel';

@NgModule({
  declarations: [
    PopularpepComponent,
    PeofilepeopleComponent
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    CarouselModule
  ]
})
export class PeopleModule { }
