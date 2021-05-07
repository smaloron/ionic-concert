import { Component, OnInit } from '@angular/core';
import {ConcertInterface, ConcertService} from "../services/concert.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  public concert: ConcertInterface;

  constructor(private concertSrv: ConcertService) { }

  ngOnInit() {
    this.concert = this.concertSrv.getNewConcert();
  }

}
