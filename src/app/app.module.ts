import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpsonComponent } from './simpson/simpson.component';
import { TDistributionComponent } from './t-distribution/t-distribution.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { ChallangeOneAComponent } from './challange-one-a/challange-one-a.component';
import { ChallangeThreeAComponent } from './challange-three-a/challange-three-a.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpsonComponent,
    TDistributionComponent,
    MenuComponent,
    ChallangeOneAComponent,
    ChallangeThreeAComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
