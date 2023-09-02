import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-save-user',
  templateUrl: './save-user.component.html',
  styleUrls: ['./save-user.component.css']
})
export class SaveUserComponent  implements OnInit {

  newUserFormGroupe! : FormGroup;
  userObj: User = new User();
  file : any[]=[];
  image:string='';
  myImage!: Observable<any>;
  base64code!: any;
  

  constructor(private userService : UserService,private http : HttpClient,
                private router : Router , private fb :FormBuilder){}

  ngOnInit(): void {
    this.newUserFormGroupe=this.fb.group({
      username : this.fb.control(null),
      password : this.fb.control(null),
      password1 : this.fb.control(null),
      email : this.fb.control(null),
      userImg : this.fb.control(null)
    })
  }

  handleSaveUser() {
    this.userObj.username = this.newUserFormGroupe.value.username;
    this.userObj.password = this.newUserFormGroupe.value.password;
    this.userObj.password1 = this.newUserFormGroupe.value.password1;
    this.userObj.email = this.newUserFormGroupe.value.email;
    this.userObj.userImg = this.base64code;

    if (this.userObj.password === this.userObj.password1) { 
        this.userService.saveUser(this.userObj).subscribe({
            next: data => {
                alert("User has been successfully saved!");
                //window.location.reload();
                this.router.navigateByUrl("/login");
            },
            error: err => {
                console.log(err);
            }
        });
    } else {
        console.log("Passwords do not match!");
    }
}

  onChange = ($event: Event) => {
    const target = $event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    //console.log(file)
    this.convertToBase64(file)
  }
  convertToBase64(file: File) {
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber)
    })
    observable.subscribe((d) => {
      // console.log(d)
      this.myImage = d
      this.base64code = d
    })
  }
  readFile(file: File, subscriber: Subscriber<any>) {
    const filereader = new FileReader();
    filereader.readAsDataURL(file)
    filereader.onload = () => {
      subscriber.next(filereader.result)
      subscriber.complete()
    }
    filereader.onerror = () => {
      subscriber.error()
      subscriber.complete()
    }
  }
}
function push(item: any) {
  throw new Error('Function not implemented.');
}


