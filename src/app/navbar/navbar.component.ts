import { CommonModule } from '@angular/common';
import { Component, NgModule  } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActionSharedService } from '../action-shared.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  searchId: any;

  constructor(private navigationService: ActionSharedService) { }

  buscaIdTicketTodoSistema(event: Event) {
    
    event.preventDefault()

    let x: any = document.getElementById('ticket_id')
    
    this.navigationService.navigateToTicketById(x.value);
  }
}
