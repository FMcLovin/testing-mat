import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StddevComponent } from './stddev/stddev.component';
import { CorrelationComponent } from './correlation/correlation.component';
import { TDistributionComponent } from './t-distribution/t-distribution.component';

const routes: Routes = [
  { path: 'correlation', component: CorrelationComponent },
  { path: 'tstudent', component: TDistributionComponent },
  { path: '', component: StddevComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
