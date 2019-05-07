import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { RouterModule } from '@angular/router';//The RouterModule will initialize and configure the Router (responsible for carrying out all app navigation) and provide it with its routing data from allAppRoutes
import { allAppRoutes } from './routes';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApixuService } from './apixu.service';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(allAppRoutes),
    ReactiveFormsModule,
    HttpClientModule

    ],
  providers: [ApixuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
