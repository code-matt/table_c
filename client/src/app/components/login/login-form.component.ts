import {Component, OnInit} from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { Observable } from 'rxjs'
import { User } from '../../shared/interfaces/user.interface'
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component'

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login.styles.css']
})

export class LoginFormComponent implements OnInit{
  public user
  public errors: any[] = []

  constructor(
    private _router: Router,
    private _authService: AuthService) {
  }

  ngOnInit(){
    this.user = {
      email: '',
      password: ''
    }
  }

  onSubmit(userCreds: User){
    this.errors = []
    var component = this
    this._authService.authenticate(this._authService.formatCreds(userCreds))
    .then(
      res => {
        component._router.navigate(['search'])
      },
      err => {
        component.errors.push("Username or Password is invalid.")
      })
  }
}
