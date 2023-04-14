import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCommentComponent } from './book-comment.component';

describe('BookCommentComponent', () => {
  let component: BookCommentComponent;
  let fixture: ComponentFixture<BookCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookCommentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
