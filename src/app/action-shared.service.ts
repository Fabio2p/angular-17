import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActionSharedService {

  private ticketSearchSubject: BehaviorSubject<string> = new BehaviorSubject<any>(null);

  constructor(private router: Router) { }

  navigateToTicketById(ticketId: string) {
    this.ticketSearchSubject.next(ticketId);
    this.router.navigate(['/vendas'], { queryParams: { id: ticketId } });

  }

  getTicketSearchObservable(): Observable<string> {
    return this.ticketSearchSubject.asObservable();
  }
}
