import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, catchError, map, throwError } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  personObservable! : Observable<Array<User>>;
  user : User = new User();
  persons! : Observable<Array<User>>;
  person : User = new User();
  
  constructor(private userService : UserService,private fb: FormBuilder
             ,private router : Router,private activateRoot : ActivatedRoute){}
  
  users! : Observable<Array<User>>;
  errorMessage! : any;
  searchformGroup! : FormGroup ;
  
  ngOnInit(): void {
    this.searchformGroup=this.fb.group({
      username : this.fb.control('')
    });
  
  this.users=this.userService.getUsers().pipe(
    catchError(err=>{
      this.errorMessage=err.message;
      return throwError(err);
    })
  );
  }

  handleSearch(){
    let kh = this.searchformGroup?.value.username;
    this.persons = this.userService.search(kh).pipe(
      catchError(err=>{
        this.errorMessage = err.error.message;
        return throwError(err);
      })
    )
  }
  
  handleDeleteUser(c : User){
      let conf = confirm("Are you sure ? ")
      if(!conf) return ;
      else{
        this.userService.delete(c.id).subscribe({
            next : (resp)=>{
              this.users=this.users.pipe(
                map( (data) => {
                  let index = data.indexOf(c);
                  data.slice(index,1);
                  return data;
                }));
                
               },
               
            error : (err) => {
              console.log(err);
            }
        }
        );
        window.location.reload();
      }
  }
  
  handelUpdateUser(id : number){
    this.router.navigate(['update',id])
  }
  
  
  handleDetailsUser(c : number){
    //this.router.navigate(["/details-user/" + c]);
    this.router.navigate(['details-user',c])
    const userId = this.activateRoot.snapshot.params['id'];
    this.user = new User();
    this.userService.getUserById(userId).subscribe({next : data=>{
      this.user =data;
    }});
  }
  
  // Inside your AllUsersComponent class
getImageUrl(base64: string): string {
  const mimeType = 'image/jpeg'; // Adjust the MIME type as needed
  return this.convertBase64ToImageUrl(base64, mimeType);
}

private convertBase64ToImageUrl(base64: string, mimeType: string): string {
    if (!this.validateBase64(base64)) {
      console.error('Invalid base64 string:', base64);
      return '';
    }
  
    const binary = atob(base64);
    const arrayBuffer = new ArrayBuffer(binary.length);
    const uintArray = new Uint8Array(arrayBuffer);
    for (let i = 0; i < binary.length; i++) {
      uintArray[i] = binary.charCodeAt(i);
    }
    const blob = new Blob([uintArray], { type: mimeType });
    return URL.createObjectURL(blob);
  }
  private validateBase64(input: string): boolean {
    const validChars = /^[A-Za-z0-9+/]*={0,2}$/;
    const isValid = validChars.test(input) && input.length % 4 === 0;
    console.log('Base64 validation result:', isValid);
    return isValid;
  }
}

  




    
  
  
  