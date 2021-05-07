import {Injectable} from '@angular/core';

export interface ConcertInterface {
  id: number;
  bandName: string;
  concertDate: Date;
  genre: string;
  rating: number;
  location: {
    name: string;
    city: string;
  };
  comment: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConcertService {

  private concertList: ConcertInterface[] = [
    {
      id: new Date().getTime(),
      bandName: 'Dropkick Murphys',
      concertDate: new Date('2021-06-20'),
      genre: 'Punk rock irlandais',
      rating: 5,
      location: {
        name: 'La Cigale',
        city: 'Paris'
      },
      comment: 'Super'
    }
  ];

  constructor() {
  }

  public getConcertList(): ConcertInterface[] {
    return this.concertList;
  }

  public getNewConcert(): ConcertInterface {
    return {
      bandName: null,
      concertDate: null,
      id: null,
      genre: null,
      rating: 0,
      comment: null,
      location: {
        name: null,
        city: null
      }
    };
  }

  public insertConcert(concert: ConcertInterface) {
    concert.id = new Date().getTime();
    this.concertList.push(concert);
  }

  public delete(id: number){
    // Trouver l'index qui correspond à l'id
    const index = this.concertList.findIndex(
      (item)=> {
        return item.id == id;
      }
    );
    // Suppression dans le tableau
    this.concertList.splice(index, 1);
  }


  getOneById(id): ConcertInterface {
    const index = this.concertList.findIndex(
      (item)=> {
        return item.id == id;
      }
    );

    return this.concertList[index];
  }

  getFilteredListByGenre(search){
    return this.concertList.filter(
      (item) => {
        return item.genre.indexOf(search) >= 0;
      }
    );
  }
}
