import { Component, OnInit } from '@angular/core';

import { Contact } from '../contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactModel = {};
  submittied = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.submittied = true;
    console.log(this.contactModel) //testing
  }

}
