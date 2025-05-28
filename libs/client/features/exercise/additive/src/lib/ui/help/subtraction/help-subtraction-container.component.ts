import { Component } from '@angular/core';
import { HelpContainerComponent, HelpGenericComponent } from '@mathly/generators/base';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import {
  SubtractionFrom0To20Crossing10Component
} from './minus-from-0-to-20-crossing-10/subtraction-from-0-to-20-crossing-10.component';

@Component({
  selector: 'mathly-help-subtraction',
  standalone: true,
  imports: [
    HelpGenericComponent,
    MatProgressSpinner,
    SubtractionFrom0To20Crossing10Component,
  ],
  templateUrl: './help-subtraction-container.component.html',
})
export class HelpSubtractionContainerComponent extends HelpContainerComponent {}
