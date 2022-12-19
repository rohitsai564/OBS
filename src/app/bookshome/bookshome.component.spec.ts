import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookshomeComponent } from './bookshome.component';

describe('BookshomeComponent', () => {
  let component: BookshomeComponent;
  let fixture: ComponentFixture<BookshomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookshomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
