import { Component } from '@angular/core';
@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'second-step',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  pipes: [ ],
  // Our list of styles in our component. We may add more to compose many styles together
  // styles: [ require('./home.css') ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: `<h1>step 2</h1>`
})
export class SecondStep {
  // TypeScript public modifiers

  constructor() {

  }

  ngOnInit() {
    console.log('hello `second step` component');
    // this.title.getData().subscribe(data => this.data = data);
  }

  submitState(value) {
    console.log('submitState', value);
  }

}
