import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPersonFormComponent } from './admin-person-form.component';

describe('AdminPersonFormComponent', () => {
  let component: AdminPersonFormComponent;
  let fixture: ComponentFixture<AdminPersonFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPersonFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPersonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
