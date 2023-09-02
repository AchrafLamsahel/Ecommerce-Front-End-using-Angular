import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveUserComponent } from './save-user.component';

describe('SaveUserComponent', () => {
  let component: SaveUserComponent;
  let fixture: ComponentFixture<SaveUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
