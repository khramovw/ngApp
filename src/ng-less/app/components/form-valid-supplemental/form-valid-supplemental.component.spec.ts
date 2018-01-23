import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidSupplementalComponent } from './form-valid-supplemental.component';

describe('FormValidSupplementalComponent', () => {
  let component: FormValidSupplementalComponent;
  let fixture: ComponentFixture<FormValidSupplementalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormValidSupplementalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormValidSupplementalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
