import { Component } from '@angular/core';
import { DataService } from './service/data/data.service';
import * as echarts from 'echarts';
@Component({
  selector: 'je-org-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'shell';

  constructor(private dataService: DataService) {}

  // ngOnInit() {
  //   this.dataService.getData().subscribe((data) => {
  //     console.log(data);
  //   });
  // }
}
