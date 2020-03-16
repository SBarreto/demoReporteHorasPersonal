import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorasExtraViewComponent } from './horas-extra-view.component';

describe('HorasExtraViewComponent', () => {
  let component: HorasExtraViewComponent;
  let fixture: ComponentFixture<HorasExtraViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorasExtraViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorasExtraViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
