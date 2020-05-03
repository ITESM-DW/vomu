import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserModel } from 'src/models/UserModel';

@Component({
  selector: 'app-user-profile-description',
  templateUrl: './user-profile-description.component.html',
  styleUrls: ['./user-profile-description.component.scss']
})
export class UserProfileDescriptionComponent implements OnInit {

  
  @Output() askEdition = new EventEmitter<number>();
  editBtn:number = 0;

  @Input() user: UserModel;

  constructor() { }

  ngOnInit(): void {
  }

  enableEdition():void{
    this.editBtn=1; 
    console.log("Variable change");
    this.askEdition.emit(this.editBtn);
  }

}
