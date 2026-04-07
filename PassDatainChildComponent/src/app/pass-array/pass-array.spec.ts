import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassArray } from './pass-array';

describe('PassArray', () => {
  let component: PassArray;
  let fixture: ComponentFixture<PassArray>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassArray],
    }).compileComponents();

    fixture = TestBed.createComponent(PassArray);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
