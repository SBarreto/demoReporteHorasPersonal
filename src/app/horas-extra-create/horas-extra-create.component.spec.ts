import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorasExtraCreateComponent } from './horas-extra-create.component';

describe('HorasExtraCreateComponent', () => {
  let component: HorasExtraCreateComponent;
  let fixture: ComponentFixture<HorasExtraCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorasExtraCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorasExtraCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
