
import { Component, ViewEncapsulation } from '@angular/core';
import { RouteConfig, Router } from '@angular/router-deprecated';

import { AppState } from './app.service';
import { Multistep } from './multistep/multistep.component';
import { Creator } from './creator/creator.component';
import { RouterActive } from './router-active';

@Component({
  selector: 'app',
  pipes: [ ],
  providers: [ ],
  directives: [ RouterActive ],
  encapsulation: ViewEncapsulation.None,
  styles: [
    require('normalize.css'),
    require('./app.css')
  ],
  template: `
    <md-content>
      <md-toolbar color="primary">
          <span>{{ name }}</span>
          <span class="fill"></span>
          
          <button md-button router-active [routerLink]=" ['Index'] ">
            Index
          </button>

          <button md-button router-active [routerLink]=" ['Creator'] ">
            Creator
          </button>
      </md-toolbar>

      <md-progress-bar mode="indeterminate" color="primary" *ngIf="loading"></md-progress-bar>

      <router-outlet></router-outlet>

      <pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>
      
      <footer>
        <img [src]="angularclassLogo" width="6%">
        WebPack Angular 2 Starter by <a [href]="url">@AngularClass</a>
      </footer>
      </md-content>
  `
})
@RouteConfig([
  { path: '/',      name: 'Index', component: Creator, useAsDefault: true },
  { path: '/creator',  name: 'Creator',  component: Creator },
])
export class App {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  loading = false;
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';

  constructor(
    public appState: AppState) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}