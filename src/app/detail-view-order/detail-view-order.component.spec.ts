import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailViewOrderComponent } from './detail-view-order.component';

describe('DetailViewOrderComponent', () => {
  let component: DetailViewOrderComponent;
  let fixture: ComponentFixture<DetailViewOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailViewOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailViewOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
