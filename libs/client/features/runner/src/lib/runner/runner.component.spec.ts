import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RunnerComponent } from './runner.component';

describe('RunnerComponent', () => {
  let component: RunnerComponent;
  let fixture: ComponentFixture<RunnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RunnerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RunnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
