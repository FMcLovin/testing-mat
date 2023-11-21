import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LinearRegressionComponent } from './linear-regression/linear-regression.component';
import { CorrelationComponent } from './correlation/correlation.component';
import { SimpsonComponent } from './simpson/simpson.component';
import { TDistributionComponent } from './t-distribution/t-distribution.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { ChallangeOneAComponent } from './challange-one-a/challange-one-a.component';

@NgModule({
  declarations: [
    AppComponent,
    LinearRegressionComponent,
    CorrelationComponent,
    SimpsonComponent,
    TDistributionComponent,
    MenuComponent,
    ChallangeOneAComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
