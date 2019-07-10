import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsSlideComponent } from './details-slide.component';

describe('DetailsSlideComponent', () => {
  let component: DetailsSlideComponent;
  let fixture: ComponentFixture<DetailsSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
