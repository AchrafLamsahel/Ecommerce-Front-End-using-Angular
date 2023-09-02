import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.css']
})
export class DetailsUserComponent implements OnInit{

  public userdata: any;
  id: any;
  username!: string; // Declare username property
  email!: string;   // Declare email property
  userImg!: string; // Declare userImg property

  constructor(
    private userservice: UserService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this._route.snapshot.params['id'];

    this.userservice.getUserById(this.id).subscribe((data) => {
      this.userdata = data;
      console.log(data);

      this.id = this.userdata.id;
      this.username = this.userdata.username;
      this.email = this.userdata.email;
      this.userImg = this.userdata.userImg;
    });
  }
}