import { Component } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'menu';

  menuItems: MenuItem[] = [
    {item: "New England Clam Chowder", category: "Soup", price: 3.95},
    {item: "Chili", category: "Soup", price: 3.95},
    {item: "Club Sandwich", category: "Sandwich", price: 5.95},
    {item: "BLT", category: "Sandwich", price: 5.95},
    {item: "Caesar Salad", category: "Salad", price: 3.95},
    {item: "Caprese Salad", category: "Salad", price: 3.95},
    {item: "Gaspacho", category: "Soup", price: 3.95},
    {item: "Broccoli Cheddar", category: "Soup", price: 3.95}
  ]

}
