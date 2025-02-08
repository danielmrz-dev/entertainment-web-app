import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAndRegisterFormComponent } from './login-and-register-form.component';

describe('LoginAndRegisterFormComponent', () => {
  let component: LoginAndRegisterFormComponent;
  let fixture: ComponentFixture<LoginAndRegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginAndRegisterFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginAndRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
