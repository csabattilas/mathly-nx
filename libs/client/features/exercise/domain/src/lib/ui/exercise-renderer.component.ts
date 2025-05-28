import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';
import { Exercise } from '../exercise.model';

@Component({
  selector: 'mathly-exercise-renderer',
  standalone: true,
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export abstract class ExerciseRendererComponent {
  @Input({
    required: true,
  })
  exercise!: Exercise;

  @Output() solved: EventEmitter<void> = new EventEmitter<void>();
  @Output() mistaken: EventEmitter<string> = new EventEmitter<string>();

  check = Math.random();
}
