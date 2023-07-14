import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Output() submitted = new EventEmitter<string>()
  term = ''
  onInputTerm(Event:Event){
    let value = (Event.target as HTMLInputElement).value;
    this.term = value;
  }

  onFormSubmit(event:Event){
    event.preventDefault();
    console.log(this.term);
    this.submitted.emit(this.term);
  }
}
