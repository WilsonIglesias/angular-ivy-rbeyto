import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TimerService } from './timer.service';
import { BitcoinService } from './bitcoin.service';
import {
  HttpClient,
  HttpClientModule,
  HttpHandler,
} from '@angular/common/http';
import { GithubService } from './github.service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [TimerService, BitcoinService, GithubService],
})
export class AppModule {}
