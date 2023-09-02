import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListproductAdminComponent } from './listproduct-admin.component';

describe('ListproductAdminComponent', () => {
  let component: ListproductAdminComponent;
  let fixture: ComponentFixture<ListproductAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListproductAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListproductAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
