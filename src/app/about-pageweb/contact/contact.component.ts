import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { contact } from 'src/app/model/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  contactForm: FormGroup;
  contactObj : contact = new contact();


  constructor(private ContactService: ContactService , private router : Router) {
        this.contactForm = new FormGroup({
          name: new FormControl("", [Validators.required]),
          emailAddress: new FormControl("", [Validators.required]),
          numberPhone: new FormControl("", [Validators.required]),
          message: new FormControl("", [Validators.required])
});
}

 ngOnInit(): void {
    
  }
 
  onClickSubmitForm(){
    if (!this.contactForm.invalid) {
      console.log(this.contactForm.value);
      this.contactObj.name = this.contactForm.value.name;
      this.contactObj.emailAddress = this.contactForm.value.emailAddress;
      this.contactObj.numberPhone = this.contactForm.value.numberPhone;
      this.contactObj.message = this.contactForm.value.message;
      this.ContactService.addContact(this.contactObj).subscribe(data =>
        console.log(data)
      )
      // To reset the form
     this.contactForm.reset();
     this.router.navigateByUrl("/navbar");
    } else {
      console.error('null'); 
    }
  }



}