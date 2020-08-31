import { Component, OnInit } from '@angular/core';
import { RentalService } from '../shared/rental.service';


@Component({
  selector: 'bwm-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {

  rentals: any[] = [];
  constructor(private rentalService : RentalService) { }

  ngOnInit() {
    debugger;

   const rentalObservable = this.rentalService.getRentals();
   debugger;
   rentalObservable.subscribe(
     (rentals)=> {
       debugger;
       this.rentals = rentals;
     },
     (err) => {
       debugger;
     },
     ()=> {
       debugger;
     });
   
  }

}
