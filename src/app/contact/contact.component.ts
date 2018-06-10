import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

import { Contact } from '../contact';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public contactModel: Contact = new Contact("", "", "", "", "")
  submitted = false

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  onSubmit(contact: Contact) {
    this.submitted = true;
    this.appService.submitContactForm(contact).subscribe((res)=> console.log())
  }

}
