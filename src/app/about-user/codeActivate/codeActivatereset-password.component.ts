import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailService } from 'src/app/services/emailService.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './codeActivate.component.html',
  styleUrls: ['./codeActivate.component.css']
})
export class codeActivateComponent implements OnInit{

  resetPasswordFormGroup! : FormGroup;
  userObj! : string;
  

  constructor( private fb :FormBuilder,private emailService : EmailService,
                private router : Router ){}

  ngOnInit(): void {
    this.resetPasswordFormGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
  });
  }

  sendEmail() {
    this.userObj = this.resetPasswordFormGroup.value.email;
    if ( this.userObj !== null ){
      this.emailService.sendCodeActivationToEmail(this.userObj).subscribe(
        response => {
          this.router.navigate(['/resetPassword']);
          alert("Code Activation sent Successfully");
        });
    }else{
      alert("Error sending activation code");
      this.router.navigateByUrl("/codeActivate")

    }

  }

 
}








