import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
@Injectable() 
export class RentalService {

    private rentals:any[] = [{
        id: 1,
        title: "Central Apartment 1",
        city: "Bangalore",
        street: "HSR layout",
        category: "apartment",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 3,
        description: "Very nice apartment",
        dailyRate: 34,
        shared: false,
        createdAt: "24/12/2017"
      },
      {
        id: 2,
        title: "Central Apartment 2",
        city: "Hyderabad",
        street: "Gachibowli",
        category: "condo",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 2,
        description: "Very nice apartment",
        dailyRate: 12,
        shared: true,
        createdAt: "24/12/2017"
      },
      {
        id: 3,
        title: "Central Apartment 3",
        city: "chennai",
        street: "DLF",
        category: "condo",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 2,
        description: "Very nice apartment",
        dailyRate: 334,
        shared: true,
        createdAt: "24/12/2017"
      },
      {
        id: 4,
        title: "Central Apartment 4",
        city: "Berlin",
        street: "Haupt strasse",
        category: "house",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 9,
        description: "Very nice apartment",
        dailyRate: 33,
        shared: true,
        createdAt: "24/12/2017"
    }];

    public getRentals():any {
debugger;
       const rentalObservable = new Observable((observer) => {
         setTimeout(()=> {
           observer.next(this.rentals);
           debugger;
         },1000);
         setTimeout(()=> {
           debugger;
          observer.error("I am Error");
        },2000);
        setTimeout(()=> {
          debugger;
          observer.complete();
        },3000);
       });
       debugger;
       return rentalObservable;
    }




}