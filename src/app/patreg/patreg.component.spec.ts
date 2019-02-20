import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatregComponent } from './patreg.component';

describe('PatregComponent', () => {
  let component: PatregComponent;
  let fixture: ComponentFixture<PatregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
