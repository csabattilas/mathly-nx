import {
  Component,
  ChangeDetectionStrategy,
  inject,
  OnDestroy,
  HostListener,
  signal,
  OnInit,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NumericKeypadService } from '@mathly-nx/ui';
import { Subscription, Subject, merge, filter, tap } from 'rxjs';
import {
  TypeInDirection,
  ExerciseRendererComponent,
} from '@mathly-nx/exercise-domain';

@Component({
  selector: 'mathly-ui-integer-solution-type-in-renderer-renderer-renderer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './integer-solution-type-in-renderer.component.html',
  styleUrl: './integer-solution-type-in-renderer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntegerSolutionTypeInRendererComponent
  extends ExerciseRendererComponent
  implements OnInit, OnDestroy
{
  readonly correct = signal<boolean[]>([]);

  readonly typeInDirection = signal<TypeInDirection>(TypeInDirection.FromLeft);

  readonly typeInDirections = TypeInDirection;

  solutionInput = signal<string>('');
  isDisabled = false;

  private readonly numericKeypadService = inject(NumericKeypadService);
  private readonly subscription = new Subscription();

  private readonly keyPressed = new Subject<string>();
  private solutionAfterDirectionChange = '';
  private currentCorrectSolutionInput = '';

  private mistakeCounter = 0;

  @HostListener('window:keydown', ['$event'])
  public handleKeyboardEvent(event: KeyboardEvent): void {
    this.keyPressed.next(event.key);
  }

  public ngOnInit(): void {
    this.subscription.add(this.onKeyPressed());

    this.typeInDirection.set(
      this.exercise.rendererOptions?.typeInDirection ??
        TypeInDirection.FromRight
    );

    if (this.typeInDirection() === TypeInDirection.FromRight) {
      this.reverseSolution();
    } else {
      this.solutionAfterDirectionChange = this.exercise.solution;
    }
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public slice($event: Event): void {
    const input = $event.target as HTMLInputElement;
    if (input && input.value.length > 1) {
      input.value = input.value.slice(0, 1);
    }
  }

  private onKeyPressed(): Subscription {
    return merge(
      this.keyPressed
        .asObservable()
        .pipe(filter((key) => /\d|Enter|Backspace|Tab|Space/.test(key))),
      this.numericKeypadService.key$
    )
      .pipe(tap((key: string) => this.checkAndToggleDirection(key)))
      .subscribe((key) => {
        if (key === 'Backspace' || key === 'Space' || key === 'Enter') {
          this.solutionInput.set('');
          this.correct.set([]);
        } else {
          //check the correct array's last element for false and reset the solutionInput with the latest correct input
          if (!this.correct().at(-1)) {
            this.solutionInput.set(this.currentCorrectSolutionInput);
          }

          // update the solutionInput with the latest key
          this.solutionInput.set(this.solutionInput() + key);

          // update the correct array with the latest key
          this.verifyAndUpdate();

          // update currentCorrectSolutionInput with the latest key if the correct array's last element is true
          if (this.correct().at(-1)) {
            this.currentCorrectSolutionInput = this.solutionInput();
          }

          this.checkAndEmitSelection();
        }
      });
  }

  private verifyAndUpdate(): void {
    const correctness = [...this.correct()];

    this.solutionInput()
      .split('')
      .forEach((input, i) => {
        correctness[i] = input === this.solutionAfterDirectionChange[i];
      });

    if (correctness.includes(false)) {
      this.mistakeCounter++;
    }

    this.correct.set(correctness);
  }

  private toggleDirection(): void {
    this.typeInDirection.set(
      this.typeInDirection() === TypeInDirection.FromLeft
        ? TypeInDirection.FromRight
        : TypeInDirection.FromLeft
    );

    if (this.typeInDirection() === TypeInDirection.FromRight) {
      this.reverseSolution();
    } else {
      this.solutionAfterDirectionChange = this.exercise.solution;
    }
  }

  private reverseSolution(): void {
    this.solutionAfterDirectionChange = this.exercise.solution
      .split('')
      .reverse()
      .join('');
  }

  private checkAndToggleDirection(key: string): void {
    if (this.exercise.rendererOptions?.typeInDirection === undefined) {
      const solutionArr = this.exercise.solution.split('');
      const checkTo =
        this.typeInDirection() === TypeInDirection.FromLeft
          ? solutionArr[0]
          : solutionArr[solutionArr.length - 1];

      if (
        this.solutionInput().length === 1 &&
        !this.solutionInput().startsWith(checkTo)
      ) {
        this.solutionInput.set('');
      }

      if (!this.solutionInput() && key === solutionArr[0]) {
        this.toggleDirection();
      }
    }
  }

  private checkAndEmitSelection(): void {
    if (this.solutionInput() === this.solutionAfterDirectionChange) {
      setTimeout(() => {
        this.solved.emit();
      }, 200); // need to keep the good result on the screen a little bit more
      this.isDisabled = true;
    }

    if (this.mistakeCounter > this.exercise.solution.length) {
      this.mistaken.emit();
      this.mistakeCounter = 0;
    }
  }
}
