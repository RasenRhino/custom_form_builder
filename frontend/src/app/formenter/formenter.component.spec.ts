import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormenterComponent } from './formenter.component';

describe('FormenterComponent', () => {
  let component: FormenterComponent;
  let fixture: ComponentFixture<FormenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
