import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandableDivComponent } from './expandable-div.component';

describe('ExpandableDivComponent', () => {
  let component: ExpandableDivComponent;
  let fixture: ComponentFixture<ExpandableDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpandableDivComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpandableDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
