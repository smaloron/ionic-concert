import { Component } from '@angular/core';
import {ConcertInterface, ConcertService} from '../services/concert.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public concertList: ConcertInterface[];

  public search;

  constructor( private concertSrv: ConcertService) {
    this.concertList = this.concertSrv.getConcertList();
  }

  deleteConcert(id: number) {
    this.concertSrv.delete(id);
  }

  onSearch(){
    if(this.search && this.search.length > 2){
      this.concertList = this.concertSrv.getFilteredListByGenre(this.search);
    } else {
      this.concertList = this.concertSrv.getConcertList();
    }
  }
}
