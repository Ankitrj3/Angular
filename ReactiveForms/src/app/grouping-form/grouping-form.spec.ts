import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupingForm } from './grouping-form';

describe('GroupingForm', () => {
  let component: GroupingForm;
  let fixture: ComponentFixture<GroupingForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupingForm],
    }).compileComponents();

    fixture = TestBed.createComponent(GroupingForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
