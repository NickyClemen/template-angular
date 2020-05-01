import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderProductoComponent } from './slider-producto.component';

describe('SliderProductoComponent', () => {
  let component: SliderProductoComponent;
  let fixture: ComponentFixture<SliderProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
