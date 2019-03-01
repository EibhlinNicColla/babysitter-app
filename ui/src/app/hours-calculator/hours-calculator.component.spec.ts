import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormControl } from '@angular/forms';
import { HoursCalculatorComponent } from './hours-calculator.component';

describe('HoursCalculatorComponent', () => {
  let component: HoursCalculatorComponent;
  let fixture: ComponentFixture<HoursCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoursCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoursCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should create a FormGroup', () => {
    expect(component.form instanceof FormGroup).toBeTruthy();
  });

  it('should create form controls', () => {
    const controls = component.form.controls;
    expect(controls['startTime']).toBeTruthy();
    expect(controls['endTime']).toBeTruthy();
    expect(controls['family']).toBeTruthy();
  });
});
