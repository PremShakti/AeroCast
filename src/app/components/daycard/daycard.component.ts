import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-daycard',
  templateUrl: './daycard.component.html',
  styleUrls: ['./daycard.component.css']
})
export class DaycardComponent {
  @Input() data: any;

}
