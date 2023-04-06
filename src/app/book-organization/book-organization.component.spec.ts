import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookOrganizationComponent } from './book-organization.component';

describe('BookOrganizationComponent', () => {
  let component: BookOrganizationComponent;
  let fixture: ComponentFixture<BookOrganizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookOrganizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
