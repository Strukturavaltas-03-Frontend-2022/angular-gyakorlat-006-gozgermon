import { Injectable } from '@angular/core';
import { Event } from 'src/app/model/event';
import { Location } from '../model/location';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  getAll(): Event[] {
    return [
      {
        name: 'Karácsony',
        date: '2022.12.24.',
        time: '10am',
        location: {
          address: 'Fő u.',
          city: 'Bp',
          country: 'Magyarország',
        }
      },
      {
        name: 'Szilveszter',
        date: '2022.12.31.',
        time: '8pm',
        location: {
          address: 'Petőfi u. 1.',
          city: 'Siófok',
          country: 'Magyarország',
        }
      },
      {
        name: 'Húsvét',
        date: '2022.04.22.',
        time: '10am',
        location: {
          address: 'Kossuth u. 1.',
          city: 'Érd',
          country: 'Magyarország',
        }
      }
    ];
  }
}
