import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterWrapComponent } from './filter-wrap.component';

describe('FilterWrapComponent', () => {
  let component: FilterWrapComponent;
  let fixture: ComponentFixture<FilterWrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterWrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
