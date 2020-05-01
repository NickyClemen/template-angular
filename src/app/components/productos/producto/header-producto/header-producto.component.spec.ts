import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderProductoComponent } from './header-producto.component';

describe('HeaderProductoComponent', () => {
  let component: HeaderProductoComponent;
  let fixture: ComponentFixture<HeaderProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
