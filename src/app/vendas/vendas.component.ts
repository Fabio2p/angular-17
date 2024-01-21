import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSharedService } from '../action-shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-vendas',
  standalone: true,
  imports: [],
  templateUrl: './vendas.component.html',
  styleUrl: './vendas.component.scss'
})
export class VendasComponent implements OnInit{
  ticketId: any;
  tickets: any
  // tickets: any[] = []; // Substitua 'any[]' pelo tipo real dos seus tickets
  filteredTickets: any[] = [];
  subscription: any
  constructor(
    private route: ActivatedRoute, 
    private navigationService: ActionSharedService,
    
    ) {  this.subscription = Subscription}

  ngOnInit() {
    this.route.params.subscribe(params => { this.ticketId = params['id'] });

    this.subscription = this.navigationService.getTicketSearchObservable().subscribe(searchId => {
      if (searchId) {
        console.log(searchId)

        this.tickets = searchId
        
      //   this.filteredTickets = this.tickets.filter(ticket => ticket.id === searchId);
      // } else {
      //   this.filteredTickets = this.tickets;
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
