import { Component } from '@angular/core';
import { DataService } from './service/data/data.service';
import * as echarts from 'echarts';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'je-org-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'jefri';
  isHomePage: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isHomePage = event.url === '/';
      }
    });
  }
}
