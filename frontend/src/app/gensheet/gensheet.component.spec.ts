import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GensheetComponent } from './gensheet.component';

describe('GensheetComponent', () => {
  let component: GensheetComponent;
  let fixture: ComponentFixture<GensheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GensheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GensheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
