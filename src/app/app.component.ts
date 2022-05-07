import { Component, VERSION } from '@angular/core';
import { BitcoinService } from './bitcoin.service';
import { GithubService } from './github.service';
import { TimerService } from './timer.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  constructor(
    public timer: TimerService,
    public gitHubService: GithubService,
    public bitcoinService: BitcoinService
  ) {}

  ngOninit() {
    this.gitHubService.update();
  }

  updateBitcoinRates() {
    this.bitcoinService.update();
  }
}
