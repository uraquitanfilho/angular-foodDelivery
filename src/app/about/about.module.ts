import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AboutComponent} from './about.component';

const ROUTES: Routes = [
  {path: '', component: AboutComponent}
];

@NgModule({
   declarations: [AboutComponent],
   imports:[RouterModule.forChild(ROUTES)]
})

export class AboutModule {}