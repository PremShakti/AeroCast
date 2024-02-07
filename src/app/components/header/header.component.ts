import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
constructor(private sharedService: SharedService){}
  searchTerms = "";

  onSearchInput(event: Event) {
    this.searchTerms = (event.target as HTMLInputElement).value;
  
   
  }

  

trigerfunctionWithData(){
  const data = { key: this.searchTerms };
    this.sharedService.triggerFunction(data);
  
}


}
