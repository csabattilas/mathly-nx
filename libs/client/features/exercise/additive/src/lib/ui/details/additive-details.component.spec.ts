import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdditiveDetailsComponent } from './additive-details.component';

describe('NewExercisesListComponent', () => {
  let component: AdditiveDetailsComponent;
  let fixture: ComponentFixture<AdditiveDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdditiveDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdditiveDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
