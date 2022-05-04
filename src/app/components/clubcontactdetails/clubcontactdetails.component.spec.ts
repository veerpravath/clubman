import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubcontactdetailsComponent } from './clubcontactdetails.component';

describe('ClubcontactdetailsComponent', () => {
  let component: ClubcontactdetailsComponent;
  let fixture: ComponentFixture<ClubcontactdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubcontactdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubcontactdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
