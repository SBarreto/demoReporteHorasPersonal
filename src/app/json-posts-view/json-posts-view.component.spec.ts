import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonPostsViewComponent } from './json-posts-view.component';

describe('JsonPostsViewComponent', () => {
  let component: JsonPostsViewComponent;
  let fixture: ComponentFixture<JsonPostsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonPostsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonPostsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
