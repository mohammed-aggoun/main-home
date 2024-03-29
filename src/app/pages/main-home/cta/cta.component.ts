import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-portfolio-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss']
})
export class CtaComponent implements OnInit {

  ctaForm: UntypedFormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    name: ['', Validators.required],
    subject: [''],
    message: ['', Validators.required]
  });
  formSubmitted: boolean = false;

  constructor (private fb: UntypedFormBuilder) { }

  ngOnInit(): void {
  }

  /**
 * convenience getter for easy access to form fields
 */
  get formValues() { return this.ctaForm.controls; }

  /**
  * On submit form
  */
  onSubmit(): void {
    this.formSubmitted = true;
  }

}
