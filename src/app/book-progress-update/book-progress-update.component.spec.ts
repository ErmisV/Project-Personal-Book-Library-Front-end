import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookProgressUpdateComponent } from './book-progress-update.component';

describe('BookProgressUpdateComponent', () => {
  let component: BookProgressUpdateComponent;
  let fixture: ComponentFixture<BookProgressUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookProgressUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookProgressUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
