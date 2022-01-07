import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="navbar is-dark">
      <div class="navbar-brand">
          <a class="navbar-item">
              mylogo
          </a>
      </div>
      <div class="navbar-menu">
          <div class="navbar-end">
              <a class="navbar-item" routerLink="/home">Home</a>
              <a class="navbar-item" routerLink="/contact">Contact</a>
              <a class="navbar-item" routerLink="/photos">Photos</a>
          </div>
      </div>
    </div>
  `,
  styles: [`
    .footer {
      background-color: hsl(0, 0%, 21%);
      
    }
    .decor {
      color: hsl(0, 0%, 96%);
    }
  `]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
