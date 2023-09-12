import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailService } from 'src/app/services/emailService.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit{

  resetPasswordFormGroup!: FormGroup;
  changePasswordFormGroup!: FormGroup; // Add a form group for changing the password
  userObj: string = ''; // Initialize userObj as a string

  constructor(
    private fb: FormBuilder,
    private emailService: EmailService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.resetPasswordFormGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });

    // Create a form group for changing the password
    this.changePasswordFormGroup = this.fb.group({
      code: ['', Validators.required], // Add validation as needed
      password: ['', Validators.required], // Add validation as needed
      confirmPassword: ['', Validators.required], // Add validation as needed
    });
  }

  sendEmail() {
    this.userObj = this.resetPasswordFormGroup.value.email;
    if (this.userObj !== null) {
      this.emailService.sendCodeActivationToEmail(this.userObj).subscribe(
        (response) => {
          console.info('Code Activation sent Successfully');
          this.router.navigateByUrl('/resetPassword');
        },
        (error) => {
          console.error('Error sending email:', error);
          alert('Error sending activation code');
        }
      );
    } else {
      alert('Error sending activation code');
      this.router.navigateByUrl('/codeActivate');
    }
  }

  resetPassword() {
    const code = this.changePasswordFormGroup.value.code;
    const password = this.changePasswordFormGroup.value.password;
    const confirmPassword = this.changePasswordFormGroup.value.confirmPassword;

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    this.emailService.resetPassword(code, password).subscribe(
      (response) => {
        console.info('Password successfully updated');
        this.router.navigateByUrl('/resetPassword');
      },
      (error) => {
        console.error('Error resetting password:', error);
        alert('Error resetting password');
      }
    );
  }
}
