import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from './services/auth.service'
import { HeaderComponent } from './components/header/header.component'

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <div class="row">
      </div>
    </div>
    <header *ngIf="_authService.isLoggedIn()"></header>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app.component.css']
})
export class AppComponent {
  constructor(private _router:Router,private _authService:AuthService){

  }
  title = 'app works!';
}
