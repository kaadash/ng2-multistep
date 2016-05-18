import { Component, Input, Injector, DynamicComponentLoader} from '@angular/core';
import {DisplayComponent} from './DisplayComponent.component';
import { AppState } from '../app.service';

@Component({
  selector: 'multistep',
  pipes: [ ],
  styles: [require('./css/prog-tracker.css')],
  template: require('./multistep.html')
})
export class Multistep {
  @Input() steps: any[];
  currentStep: number;
  lastStepNumber: number;
  stepStyles: string[];
  constructor(private _loader: DynamicComponentLoader, private injector: Injector) {
    this.currentStep = 0;
    this.stepStyles = [];
  }

  ngOnInit(){
    this._loader.loadAsRoot(this.steps[0].component, '#multistep-outline', this.injector);
    this.steps.forEach((obj, iter)=> {
      if(iter === 0) {
        this.stepStyles[iter] = 'doing';
      }
      else {
         this.stepStyles[iter] = 'todo';
      }
    });
    this.lastStepNumber = this.steps.length;
  }

  changeStep(stepNumber){
    if(stepNumber < this.lastStepNumber && stepNumber >= 0) {
      this._loader.loadAsRoot(this.steps[stepNumber].component, '#multistep-outline', this.injector);
      for (let i = stepNumber - 1; i >= 0; i--) {
        this.stepStyles[i] = 'done';
      }
      this.stepStyles[stepNumber] = 'doing';
      for (let i = stepNumber + 1; i < this.lastStepNumber; i++) {
        this.stepStyles[i] = 'todo'; 
      }
      this.currentStep = stepNumber;
    }
  }

  nextStep(){
    this.changeStep(this.currentStep + 1); 
  }

  previousStep(){
    this.changeStep(this.currentStep - 1);
  }
  
}