import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeaturesUserComponent } from './features-user.component';

describe('FeaturesUserComponent', () => {
  let component: FeaturesUserComponent;
  let fixture: ComponentFixture<FeaturesUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturesUserComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturesUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
