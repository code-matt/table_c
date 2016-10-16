import { Component } from '@angular/core'
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.styles.css']
})
export class HeaderComponent{
  constructor(private _authService:AuthService,private router:Router){
  
  }

  public active = false

  toggleActive(){
    this.active = !this.active
  }

  logOut(){
    this._authService.logOut()
  }

  search(){
    this.router.navigate(['search'])
  }
}