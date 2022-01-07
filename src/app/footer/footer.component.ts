import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      <div class="container content has-text-centered">
          <h1 class="decor">made with love</h1>
      </div>
    </footer>
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
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
