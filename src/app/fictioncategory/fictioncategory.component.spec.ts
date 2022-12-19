import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FictioncategoryComponent } from './fictioncategory.component';

describe('FictioncategoryComponent', () => {
  let component: FictioncategoryComponent;
  let fixture: ComponentFixture<FictioncategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FictioncategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FictioncategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
