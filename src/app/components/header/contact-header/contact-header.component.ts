import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-header',
  templateUrl: './contact-header.component.html',
  styleUrls: ['./contact-header.component.css']
})
export class ContactHeaderComponent implements OnInit {

  private contactEmail:string = 'email@email.com';

  getContact():string {
    return this.contactEmail;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
