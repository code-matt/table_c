import { Component, OnInit } from '@angular/core'
import { ThingService } from '../../services/thing.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.styles.css']
})
export class ConversationsComponent implements OnInit{
  constructor(private _thingService:ThingService,private route:ActivatedRoute){

  }
  tables = []
  ngOnInit(){
    // this._thingService.loadThings(event.location)
    //   .subscribe(data => {
    //     console.log(data)
    //   })
    this.route.params
      .map(params => [params['location'],params["for"],params["eating"]])
      .subscribe((params) => {
        this._thingService
          .loadThings(params)
          .subscribe(tables => this.tables = tables);
      });
  }
}