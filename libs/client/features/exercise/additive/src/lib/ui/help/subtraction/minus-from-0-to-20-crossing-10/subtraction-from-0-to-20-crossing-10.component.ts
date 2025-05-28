import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Exercise, HelpComponent } from '@mathly/generators/base';
import { IntegerSolutionTypeInRendererComponent } from '@mathly/renderers';

@Component({
  selector: 'mathly-help-subtraction-from-0-to-20-crossing-10',
  standalone: true,
  imports: [CommonModule, IntegerSolutionTypeInRendererComponent],
  templateUrl: './subtraction-from-0-to-20-crossing-10.component.html',
  styleUrl: './subtraction-from-0-to-20-crossing-10.component.scss',
})
export class SubtractionFrom0To20Crossing10Component
  extends HelpComponent
  implements OnInit, AfterViewInit
{
  @ViewChild('greenArc', {
    static: false,
  })
  private readonly greenArc?: ElementRef<SVGPathElement>;

  @ViewChild('greenArcArrow', {
    static: false,
  })
  private readonly greenArcArrow?: ElementRef<SVGPathElement>;

  numberLineSubtrahend: number[] = [];
  minuend = 0;
  subtrahend = 0;
  steps = 30;
  curveHeight = 180;
  archLength = 0;
  excessTen = 0;
  exerciseString = '';
  exerciseSubtrahendMinExcess?: Exercise;

  public ngOnInit(): void {
    this.minuend = this.exercise.descriptor[0].block as number;
    this.subtrahend = this.exercise.descriptor[2].block as number;
    this.excessTen = this.minuend - 10;

    this.curveHeight = 10 * this.subtrahend * 2;

    for (let i = 0; i <= this.subtrahend; i++) {
      this.numberLineSubtrahend.push(i);
    }

    this.exerciseString = this.exercise.descriptor
      .map((item) => (item.isNotKnown === true ? '...' : item.block))
      .join(' ');

    this.createExercises(this.subtrahend, this.excessTen);
  }

  public ngAfterViewInit(): void {
    this.animateArc();
  }

  private animateArc(): void {
    if (this.greenArc) {
      const path = this.greenArc.nativeElement;
      this.archLength = path.getTotalLength(); // Get the length of the path

      // Set the initial conditions for the "invisible" arc
      path.style.strokeDasharray = `${this.archLength}`;
      path.style.strokeDashoffset = `${this.archLength}`;

      // Animate the stroke dash offset to 0 to "draw" the arc
      setTimeout(() => {
        path.style.transition = 'stroke-dashoffset 500ms ease-in-out';
        path.style.strokeDashoffset = '0';

        setTimeout(() => {
          if (this.greenArcArrow) {
            this.greenArcArrow.nativeElement.style.visibility = 'visible';
          }
        }, 500);
      }); // Starts the animation after 500 ms
    }
  }

  private createExercises(subtrahend: number, excessTen: number): void {
    this.exerciseSubtrahendMinExcess = {
      solution: (subtrahend - excessTen).toString(),
      descriptor: [
        {
          block: subtrahend,
        },
        {
          block: '-',
        },
        {
          block: excessTen,
        },
        {
          block: '=',
        },
        {
          block: subtrahend - excessTen,
          isNotKnown: true,
        },
      ],
      timeToSolve: 0,
      description: '',
      scoreConfig: {
        timeBonus: [],
        mistakePenalty: {
          basePenalty: 0,
          tooManyMistakesPenalty: 0,
          tooManyMistakesThreshold: 0,
        },
        allowTimeBonusAfterNumberOfMistakes: 0,
        allowTimeBonusAfterNumberOfChoiceMistakes: 0,
        helpPenalty: 0,
        hintPenalty: 0,
        minScore: 0,
      },
      sessionScoreConfig: {
        bla: 0,
      },
    };
  }
}
