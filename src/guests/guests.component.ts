import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-guests-list',
  templateUrl: './guests.html',
  styleUrls: ['./guests.css'],

})
export class GuestsComponent implements OnInit {
  title = 'hahowisko';
  guests: Array<Guest>;

  ngOnInit() {
    const guest = new Guest({
      name: 'Karo',
      surname: 'Karu',
      isChild: false,
      phoneNumber: 660594795,
      accompany: [],
      willSleep: false,
      hasConfirmed: false,
    });

    this.guests = [guest, guest];
  }

}
