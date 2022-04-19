import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalmodalComponent } from './additionalmodal.component';

describe('AdditionalmodalComponent', () => {
  let component: AdditionalmodalComponent;
  let fixture: ComponentFixture<AdditionalmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalmodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
