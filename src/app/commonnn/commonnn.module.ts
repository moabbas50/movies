import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinutesToHoursPipe } from './minutes-to-hours.pipe';
import { LanguageTranslatePipe } from './language-translate.pipe';




@NgModule({
  declarations: [     MinutesToHoursPipe,
    LanguageTranslatePipe ],
  imports: [
    CommonModule,

  ],
  exports:[
    MinutesToHoursPipe,
    LanguageTranslatePipe
  ]
})
export class CommonnnModule { }
