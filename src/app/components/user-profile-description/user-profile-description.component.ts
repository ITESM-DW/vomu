import { Component, OnInit, Input } from '@angular/core';
import { UserModel } from 'src/models/UserModel';

@Component({
  selector: 'app-user-profile-description',
  templateUrl: './user-profile-description.component.html',
  styleUrls: ['./user-profile-description.component.scss']
})
export class UserProfileDescriptionComponent implements OnInit {

  @Input() user: UserModel;

  constructor() { }

  ngOnInit(): void {
  }

}
