import { Component, Input, OnInit } from '@angular/core';
import { empty } from 'rxjs';
import { ApiCallService } from 'src/app/api-call.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  getalldata: any;
  headline: any;
  toplocations: any[] = [];
  loder: boolean = false;
  constructor(
    private _api: ApiCallService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.loder = true;
    this.headline = 'India';
    this.sharedService.triggerFunction$.subscribe((data: any) => {
      this.triggeredFunction(data);
    });

    this._api.getProducts().subscribe({
      next: (data) => {
        this.loder = false;
        this.getalldata = data.timelines.daily;
        this.toplocations = data.location.name.split(',');
        console.log(this.toplocations);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  triggeredFunction(ok: any) {
    this.getalldata = null;
    this.loder = true;
    this.headline = ok;

    this._api.changeLocation(ok.key).subscribe({
      next: (data) => {
        this.getalldata = data.timelines.daily;
        this.toplocations = data.location.name.split(',');
        this.loder = false;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  trigerLocations(data: any) {
    let obj = { key: String };
    obj.key = data;
    this.triggeredFunction(obj);
  }
}
