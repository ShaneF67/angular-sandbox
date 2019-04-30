import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { ChangePasswordValidators } from './change-password-validators';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  changePasswordForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.changePasswordForm = this.fb.group({
      oldPass: ['', Validators.required, ChangePasswordValidators.checkOldPasswordIsCorrect],
      newPass: ['', Validators.required],
      confirmPass: ['', Validators.required]
    }, {
        validator: ChangePasswordValidators.checkPasswordsMatch
      });
  }

  get oldPass() {
    return this.changePasswordForm.get("oldPass");
  }

  get newPass() {
    return this.changePasswordForm.get("newPass");
  }

  get confirmPass() {
    return this.changePasswordForm.get("confirmPass");
  }
}
