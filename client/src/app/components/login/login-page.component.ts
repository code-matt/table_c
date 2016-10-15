import { Component, OnInit } from '@angular/core'
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: `index-page`,
  template: `
    <login-form></login-form>
  `,
  styleUrls: ['./login.styles.css']
})

export class LoginPageComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router){
  }
  
  ngOnInit(){
    if(this.authService.isLoggedIn){
      this.router.navigate(['search'])
    }
  }
}