import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from './services/auth.service'

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <button
            class="btn btn-default"
            type="button"
            (click)="_authService.logOut()"
            *ngIf="_authService.isLoggedIn()">
              LogOut
          </button>
        </div>
      </div>
    </div>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app.component.css']
})
export class AppComponent {
  constructor(private _router:Router,private _authService:AuthService){

  }
  title = 'app works!';
}
