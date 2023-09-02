import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsChildrenComponent } from './products-children.component';

describe('ProductsChildrenComponent', () => {
  let component: ProductsChildrenComponent;
  let fixture: ComponentFixture<ProductsChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsChildrenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
