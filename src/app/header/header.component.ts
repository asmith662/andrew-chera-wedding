import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-header',
  template: `
  <!--html-->
<header class="navbar"  [ngClass]="{'navbar-fixed': isFixedNavbar}">
  <div class="container is-dark" fxLayout="row wrap" fxLayoutAlign="start center">
     <div class="navbar-mobile-top" fxLayout="row" fxLayoutWrap="wrap" fxLayoutAlign="start center">
        <button mat-icon-button color="hsl(0, 0%, 21%)" class="navbar-toggle" (click)="toggleNavbar()">
           <mat-icon>{{!navbarOpened ? 'menu': 'close'}}</mat-icon>
        </button>
     </div>
     <div fxFlex class="top-navbar navbar-start">
        <span fxFlex></span>
        <a mat-button  class="navbartop-btn" routerLink="/home"><strong>Home</strong></a>
        <a mat-button  class="navbartop-btn" routerLink="/contact"><strong>Contact</strong></a>
        <a mat-button  class="navbartop-btn" routerLink="/photos"><strong>Photos</strong></a>
        <a mat-button  class="navbartop-btn" ><strong>Itinerary</strong></a>
     </div>
  </div>
</header>


  <!-- Collapsible content -->
      <!-- <div class="navbar-menu">
          <div class="navbar-end">
              <a class="navbar-item" routerLink="/home">Home</a>
              <a class="navbar-item" routerLink="/contact">Contact</a>
              <a class="navbar-item" routerLink="/photos">Photos</a>
          </div>
      </div>
    </div> -->
  `,
  styles: [`
//css
.navbar {
    position: absolute;
    width: 100%;
    background: hsl(0, 0%, 21%);
    color: hsl(0, 0%, 96%);
    top: 0;
    left: 0;
    right: 0;
    padding: 22px 0;
    transition: padding 0.3s linear;
    -webkit-transition: padding 0.3s linear;
    z-index: 999;
  }
  .navbar > .container {
    height: auto;
  }
  .navbartop-btn:hover .mat-button-focus-overlay {
    display: none;
  }
  .navbar:not(.navbar-fixed) .navbartop-btn .mat-button-ripple {
    top: -22px;
    bottom: -22px;
  }
  
  .navbar-fixed {
    position: fixed !important;
    left: 0;
    right: 0;
    top: 0;
    padding: 0 !important;
    box-shadow: 0 0 4px rgba(0,0,0,.14), 0 4px 8px rgba(0,0,0,.28);
    animation: .6s slideDown forwards;
  }
  .navbar-fixed .container {
    height: 60px !important;
  }
  .navbar-fixed .navbartop-btn {
    line-height: 60px !important;
  }
  .navbar-logo {
    display: flex;
    align-items: center;
    a {
      display: inherit;
    }
  }
  .navbar-toggle {
    display: none !important;
    position: absolute !important;
    left: -15%;
    top: 25%;
  }
  .icon-button {
    .mat-icon {
      font-size: 20px;
      color: hsl(0, 0%, 96%);
    }
  }

  @media (max-width: 991px) {
  
    .navbar {
      padding: 0;
    }
    .navbar > .container {
        height: 60px;
        padding: 0;
    }
    .navbar-opened:host .navbar-mobile-top {
      padding: 13px 0;
    }
   .navbar-toggle {
        display: block !important;
    }
    .navbar-opened:host .container {
        height: auto !important;
        padding: 0px !important;
    }
    .navbar-logo {
        margin-left: 15px; 
    }
    .top-navbar {
        display: none !important;
        
    }
    .navbar-opened:host {
        .top-navbar {
            display: block !important;
            width: 100% !important;
            height: auto;
            flex: none !important;
            color: hsl(0, 0%, 96%);
            background: hsl(0, 0%, 21%);
            
        }
    }
    .navbar-opened:host .top-navbar a {
        display: block;
        width: 100%;
        line-height: 56px !important;
        color: hsl(0, 0%, 96%);
        
    }
  }

  `]
})
export class HeaderComponent implements OnInit {
  isFixedNavbar: any;
  @HostBinding('class.navbar-opened') navbarOpened = false;
  constructor() { }

  ngOnInit(): void {
    
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if(offset > 10) {
      this.isFixedNavbar = true;
    } else {
      this.isFixedNavbar = false;
    }
  }

  toggleNavbar() {
    this.navbarOpened = !this.navbarOpened;
  }

  
}
