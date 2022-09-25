import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FlightListService {
  constructor(private $http: HttpClient) {}
  public list() {
    return [
      {
        flightNumber: 'FR153',
        departure: 'DUB',
        destination: 'WRO',
        departureDatetime: '2018-06-15T17:25:00',
        arrivalDatetime: '2018-06-15T21:00:00'
      },
      {
        flightNumber: 'FR153',
        departure: 'WRO',
        destination: 'DUB',
        departureDatetime: '2018-06-15T21:25:00',
        arrivalDatetime: '2018-06-15T23:05:00'
      },
      {
        flightNumber: 'FR154',
        departure: 'DUB',
        destination: 'CIA',
        departureDatetime: '2018-06-16T16:30:00',
        arrivalDatetime: '2018-06-16T20:35:00'
      },
      {
        flightNumber: 'FR154',
        departure: 'CIA',
        destination: 'DUB',
        departureDatetime: '2018-06-16T21:00:00',
        arrivalDatetime: '2018-06-16T23:15:00'
      },
      {
        flightNumber: 'FR155',
        departure: 'DUB',
        destination: 'MAD',
        departureDatetime: '2018-06-18T17:15:00',
        arrivalDatetime: '2018-06-15T20:55:00'
      },
      {
        flightNumber: 'FR155',
        departure: 'MAD',
        destination: 'DUB',
        departureDatetime: '2018-06-18T21:30:00',
        arrivalDatetime: '2018-06-15T23:10:00'
      }
    ];
  }

  public listAPI() {
    return this.$http.get(
      'https://murmuring-ocean-10826.herokuapp.com/en/api/2/flights/from/DUB/to/STN/2014-12-02/2015-02-02/250/unique/?limit=15&offset-0'
    );
  }

  public single(departure, destination) {
    const flight = this.list().filter(
      el => el.departure === departure && el.destination === destination
    );
    return flight ? flight[0] : undefined;
  }
}