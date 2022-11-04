import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerCarsComponent } from './buyer-cars.component';

describe('BuyerCarsComponent', () => {
  let component: BuyerCarsComponent;
  let fixture: ComponentFixture<BuyerCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyerCarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyerCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
