import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptiondetailsComponent } from './subscriptiondetails.component';

describe('SubscriptiondetailsComponent', () => {
  let component: SubscriptiondetailsComponent;
  let fixture: ComponentFixture<SubscriptiondetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptiondetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptiondetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
