import { Component, OnInit } from '@angular/core';
declare function app_init();
declare function init_plugins();
declare function app_switcher();
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    app_init();
    app_switcher();
    init_plugins();
  }

}
