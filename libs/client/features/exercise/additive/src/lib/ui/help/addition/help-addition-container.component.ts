import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubtractionFrom0To20Crossing10Component } from '../subtraction/minus-from-0-to-20-crossing-10/subtraction-from-0-to-20-crossing-10.component';
import { HelpContainerComponent } from '@mathly-nx/exercise-domain';

@Component({
  selector: 'mathly-help-addition',
  standalone: true,
  imports: [CommonModule, SubtractionFrom0To20Crossing10Component],
  templateUrl: './help-addition-container.component.html',
})
export class HelpAdditionContainerComponent extends HelpContainerComponent {}
