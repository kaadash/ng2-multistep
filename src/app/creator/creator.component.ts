import { Component } from '@angular/core';
import {Multistep} from '../multistep/multistep.component';
import {FirstStep} from './step1.component';
import {SecondStep} from './step2.component';
import {ThirdStep} from './step3.component';
@Component({
  selector: 'creator', 
  pipes: [ ],
  directives: [Multistep],
  template: require('./creator.html')
})
export class Creator {
  steps: any[];
  angry: string;
  constructor() {
    this.steps = [
      {component: FirstStep, name: 'first step'},
      {component: SecondStep, name: 'second step'},
      {component: ThirdStep, name: 'third step'}
    ];
  }

  ngOnInit() {
    console.log('hello `Creator` component');
  }

  submitState(value) {
    console.log('submitState', value);
  }
}
