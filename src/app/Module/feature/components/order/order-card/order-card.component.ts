import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrl: './order-card.component.scss'
})
export class OrderCardComponent {

  constructor(private router: Router){}

  navigateToOrderDetails = (id:Number) => {
    this.router.navigate([`order/${id}`]);
  }

}
