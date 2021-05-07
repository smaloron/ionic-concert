import { Component, OnInit } from '@angular/core';
import {ConcertInterface, ConcertService} from '../services/concert.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  public concert: ConcertInterface;

  constructor(private concertSrv: ConcertService,
              private router: Router,
              private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    // Récupération du paramètre id passé dans la route
    const id = this.activeRoute.snapshot.paramMap.get('id');

    if(id){
      this.concert = this.concertSrv.getOneById(id);
    } else {
      // Si id est null alors il n'y a pas de paramètres
      this.concert = this.concertSrv.getNewConcert();
    }
  }


  validateForm() {
    // Insertion du concert
    if(this.concert.id == null){
      this.concertSrv.insertConcert(this.concert);
    }

    // Retour vers home
    this.router.navigateByUrl('/home');
  }
}
