import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopularpepComponent } from './components/popularpep/popularpep.component';
import { PeofilepeopleComponent } from './components/peofilepeople/peofilepeople.component';

const routes: Routes = [
  {path:"popular/:id",component:PopularpepComponent},
  {path:"",component:PopularpepComponent},
  {path:"popular",component:PopularpepComponent},
  {path:"popular/:id",component:PopularpepComponent},
  {path:"profile/:id",component:PeofilepeopleComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
