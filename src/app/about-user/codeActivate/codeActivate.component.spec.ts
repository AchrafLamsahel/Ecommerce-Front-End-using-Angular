import { ComponentFixture, TestBed } from '@angular/core/testing';

import { codeActivateComponent } from './codeActivatereset-password.component';

describe('ResetPasswordComponent', () => {
  let component: codeActivateComponent;
  let fixture: ComponentFixture<codeActivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ codeActivateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(codeActivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
