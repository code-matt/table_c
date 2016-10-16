import { Component } from '@angular/core'
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime'
import { ThingService } from '../../services/thing.service'
import { SearchResultsComponent } from './results.component'
import { Router } from '@angular/router'
import { HeaderComponent } from '../header/header.component'
declare const $;

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.styles.css']
})
export class SearchComponent{
  private search = new FormControl();
  results = []
  focus: boolean = false;

  public state = {
    for: {
      today: false,
      tomorrow: false
    },
    eating: {
      breakfast: false,
      lunch: false,
      dinner: false
    }
  }

  public searchParams = {
    location: null,
    for: null,
    eating: null
  }

  constructor(private _thingService: ThingService, private _router:Router){
    this.search.valueChanges
      .debounceTime(500)
      .subscribe(
      s => {
        _thingService.getThings(s)
        .subscribe(data => {
          console.log(data)
          this.results = data
        })
      },
      error => console.log(error))
  }

  toggleFor(selected){
   selected = selected.target.innerHTML.toLowerCase().replace(/\s+/g, '')
   for(let day in this.state.for){
     if(day == selected){
       this.state.for[day] = true
       this.searchParams.for = day
     }else{
       this.state.for[day] = false
     }
   }
  }

  toggleEating(selected){
    selected = selected.target.innerHTML.toLowerCase().replace(/\s+/g, '')
    for(let meal in this.state.eating){
      if(meal == selected){
        this.state.eating[meal] = true
        this.searchParams.eating = meal
      }else{
        this.state.eating[meal] = false
      }
    }
  }

  trySearch(){
    if(this.searchParams.location == null || this.searchParams.for == null || this.searchParams.eating == null){
      this.searchError()
    }else{
      this._router.navigate(['conversations/'+ this.searchParams.location + '/' + this.searchParams.for + '/' + this.searchParams.eating ])
    }
  }

  searchError(){
    $('#myModal').modal('show')
  }
  gainFocus(){
    this.focus = true;
  }

  loseFocus(){
    this.focus = false;
  }

  loadConversations(event){
    this.loseFocus()
    this.searchParams.location=event.location
  }
}