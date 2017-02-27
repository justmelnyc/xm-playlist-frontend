import { NgModule } from '@angular/core';

import { TimeSinceComponent } from './time-since.component';

const COMPONENTS = [
  TimeSinceComponent,
];

@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class XmUtility { }
