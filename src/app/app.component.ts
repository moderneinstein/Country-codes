import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  search: string;
  items: any;
  constructor(private service: AppService) { }
  ngOnInit() {
    this.items = this.service.getData()
      .subscribe((data: any) => {
        console.log(data);
        this.items = data.responseObject;
      });
  }
}
