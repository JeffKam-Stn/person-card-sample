import { Component, OnInit } from '@angular/core';
import { Msal2Provider, Providers } from '@microsoft/mgt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'person-card';

  ngOnInit(){
    Providers.globalProvider = new Msal2Provider({
      clientId: '2dfea037-938a-4ed8-9b35-c05708a1b241'
    });

    const personCard:any = document.querySelector('.my-person-card');

    personCard.personDetails = {
        displayName: 'Megan Bowen',
        jobTitle: 'CEO',
        userPrincipalName: 'megan@contoso.com',
        mail: 'megan@contoso.com',
        businessPhones: ['423-555-0120'],
        mobilePhone: '424-555-0130',
    };
  }
}
