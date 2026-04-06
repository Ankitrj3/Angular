import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dynamicrouting } from './dynamicrouting';

describe('Dynamicrouting', () => {
  let component: Dynamicrouting;
  let fixture: ComponentFixture<Dynamicrouting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dynamicrouting],
    }).compileComponents();

    fixture = TestBed.createComponent(Dynamicrouting);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
