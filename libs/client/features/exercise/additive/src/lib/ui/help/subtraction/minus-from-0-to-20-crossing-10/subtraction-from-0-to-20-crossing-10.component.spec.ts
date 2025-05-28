import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubtractionFrom0To20Crossing10Component } from './subtraction-from-0-to-20-crossing-10.component';

describe('MinusFrom0To20Crossing10Component', () => {
  let component: SubtractionFrom0To20Crossing10Component;
  let fixture: ComponentFixture<SubtractionFrom0To20Crossing10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubtractionFrom0To20Crossing10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(SubtractionFrom0To20Crossing10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
