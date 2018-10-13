import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdiminProductsComponent } from './adimin-products.component';

describe('AdiminProductsComponent', () => {
  let component: AdiminProductsComponent;
  let fixture: ComponentFixture<AdiminProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdiminProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdiminProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
