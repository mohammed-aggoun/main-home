import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, Validators, UntypedFormBuilder } from '@angular/forms';

// validaator
import { Validation } from './confirm-password.validator';

@Component({
  selector: 'app-settings-password-tab',
  templateUrl: './password-tab.component.html',
  styleUrls: ['./password-tab.component.scss']
})
export class PasswordTabComponent implements OnInit {

  passwordForm: UntypedFormGroup = this.fb.group({
    currentPassword: ['', Validators.required],
    newPassword: ['', [Validators.required, Validators.minLength(4)]],
    confirmPassword: ['', [Validators.required]]
  },
    {
      validators: [Validation.match('newPassword', 'confirmPassword')]
    }
  );

  formSubmitted: boolean = false;

  constructor (private fb: UntypedFormBuilder) { }

  ngOnInit(): void {
  }

  /**
 * convenience getter for easy access to form fields
 */
  get formValues() { return this.passwordForm.controls; }

  /**
  * On submit form
  */
  onSubmit(): void {
    this.formSubmitted = true;
  }

}
