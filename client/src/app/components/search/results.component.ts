import {Component,Input,OnChanges,Output,EventEmitter} from '@angular/core'

@Component({
  selector: `search-results`,
  styleUrls: ['./search.styles.css'],
  template: `
    <div class="search-results">
      <div *ngFor="let result of results" class="search-result" [ngClass]="{'pull-up':results.length > 0, 'pull-down':results.length == 0}">
        <span (click)="loadConversations($event)">{{result}}</span>
      </div>
    </div>
  `
})
export class SearchResultsComponent implements OnChanges{
  constructor(){
  }
  @Input() results = []
  @Output() load = new EventEmitter();

  ngOnChanges(changes: any){
  }

  loadConversations(event: any){
    var name = event.target.parentNode.children[0].innerHTML;
    this.load.emit({
      location: name,
    })
  }
}