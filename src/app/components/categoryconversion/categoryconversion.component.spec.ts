import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryconversionComponent } from './categoryconversion.component';

describe('CategoryconversionComponent', () => {
  let component: CategoryconversionComponent;
  let fixture: ComponentFixture<CategoryconversionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryconversionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryconversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
