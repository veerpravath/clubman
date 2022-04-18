import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherdetailcardComponent } from './otherdetailcard.component';

describe('OtherdetailcardComponent', () => {
  let component: OtherdetailcardComponent;
  let fixture: ComponentFixture<OtherdetailcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherdetailcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherdetailcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
