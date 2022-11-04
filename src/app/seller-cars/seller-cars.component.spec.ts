import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerCarsComponent } from './seller-cars.component';

describe('SellerCarsComponent', () => {
  let component: SellerCarsComponent;
  let fixture: ComponentFixture<SellerCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerCarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
