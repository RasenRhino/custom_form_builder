import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlangComponent } from './slang.component';

describe('SlangComponent', () => {
  let component: SlangComponent;
  let fixture: ComponentFixture<SlangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlangComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
