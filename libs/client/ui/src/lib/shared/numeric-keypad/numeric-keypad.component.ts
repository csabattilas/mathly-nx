import { Component, inject } from '@angular/core';
import { NumericKeypadService } from './numeric-keypad.service';

@Component({
  selector: 'mathly-ui-numeric-keypad',
  standalone: true,
  styleUrls: ['./numeric-keypad.component.scss'],
  templateUrl: './numeric-keypad.component.html',
})
export class NumericKeypadComponent {
  readonly rows: string[][] = [
    ['1', '2', '3', '4', '5'],
    ['6', '7', '8', '9', '0'],
  ];

  private readonly numericKeyPadService = inject(NumericKeypadService);

  public onKeyClick(number: string): void {
    this.numericKeyPadService.pushKey(number);
  }
}
