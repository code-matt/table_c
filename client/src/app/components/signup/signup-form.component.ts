import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { Observable } from 'rxjs'
import { User } from '../../shared/interfaces/user.interface'
import { Router } from '@angular/router';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup.styles.css']
})

export class SignupFormComponent implements OnInit{
  public user: User
  public errors: any[] = []

  constructor(
    private _router: Router,
    private _authService: AuthService) {
  }

  ngOnInit(){
    this.user = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      school: ''
    }
  }

  onSubmit(userCreds: User){
    var component = this
    this._authService.signup(this._authService.formatUser(userCreds))
    .then(
      res => {
        component._router.navigate(['login'])
      },
      err => {
        component.errors = err.errors
      })
  }
}
