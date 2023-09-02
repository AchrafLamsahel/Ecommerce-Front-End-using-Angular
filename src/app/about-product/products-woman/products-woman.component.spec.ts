import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsWomanComponent } from './products-woman.component';

describe('ProductsWomanComponent', () => {
  let component: ProductsWomanComponent;
  let fixture: ComponentFixture<ProductsWomanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsWomanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsWomanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
