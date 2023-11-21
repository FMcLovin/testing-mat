import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChallangeOneAComponent } from './challange-one-a/challange-one-a.component';
import { ChallangeThreeAComponent } from './challange-three-a/challange-three-a.component';
import { TDistributionComponent } from './t-distribution/t-distribution.component';

const routes: Routes = [
  { path: 'correlation', component: ChallangeThreeAComponent },
  { path: 'tstudent', component: TDistributionComponent },
  { path: '', component: ChallangeOneAComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
