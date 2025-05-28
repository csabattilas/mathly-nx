import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IntegerSolutionTypeInRendererComponent } from './integer-solution-type-in-renderer.component';

describe('BasicComponent', () => {
  let component: IntegerSolutionTypeInRendererComponent;
  let fixture: ComponentFixture<IntegerSolutionTypeInRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntegerSolutionTypeInRendererComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IntegerSolutionTypeInRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
