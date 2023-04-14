import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCommentListComponent } from './book-comment-list.component';

describe('BookCommentListComponent', () => {
  let component: BookCommentListComponent;
  let fixture: ComponentFixture<BookCommentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookCommentListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookCommentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
