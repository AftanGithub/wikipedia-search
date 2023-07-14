import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchList = [];
  constructor(private wikipedia:WikipediaService){

  }
  onTerm(term:string){
    // console.log(term);
   this.wikipedia.search(term).subscribe((response:any)=>{
    console.log(response);
    this.searchList = response.query.search
   });
    
  }
}
