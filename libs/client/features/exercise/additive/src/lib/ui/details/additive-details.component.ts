import { Component } from '@angular/core';
import { AdditiveDifficulty, ExerciseCategory, ExerciseType, ExerciseDifficulty, Additive } from '@mathly/domain';
import { RoutineDetailsComponent } from '@mathly/generators/base';

@Component({
  selector: 'mathly-additive-details-routine',
  standalone: true,
  templateUrl: './additive-details.component.html',
})
export class AdditiveDetailsComponent extends RoutineDetailsComponent {
  protected readonly additiveWithDifficulties: ExerciseType[] = Object.values(
    Additive,
  ).filter((value) => !value.toLowerCase().includes('mixed'));

  protected readonly additiveMixed: ExerciseType[] = Object.values(
    Additive,
  ).filter((value) => value.toLowerCase().includes('mixed'));

  protected readonly additiveDifficulty: ExerciseDifficulty[] =
    Object.values(AdditiveDifficulty);

  protected readonly AdditiveDifficulty = AdditiveDifficulty;
  protected readonly ExerciseCategory = ExerciseCategory;
}
