import { Component } from '@angular/core';
import {ConcertInterface, ConcertService} from '../services/concert.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public concertList: ConcertInterface[];

  constructor( private concertSrv: ConcertService) {
    this.concertList = this.concertSrv.getConcertList();
  }

}
