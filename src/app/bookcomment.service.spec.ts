import { TestBed } from '@angular/core/testing';

import { BookCommentService } from './bookcomment.service';

describe('CommentService', () => {
  let service: BookCommentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookCommentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
