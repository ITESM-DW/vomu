import { Component, OnInit, Input } from '@angular/core';

import { UserModel } from '../../../models/UserModel';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  editBtn: number = 0;

  @Input() user: UserModel;

  constructor() { }

  ngOnInit(): void {
    // TODO(kevinwkt): undo hardcode for now.
    this.user = {
      username: "Ramón González",
      title: "PhD.",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem deleniti molestiae officiis optio? Facilis aliquam aut dicta impedit autem neque ut cumque, praesentium eveniet quasi accusantium blanditiis. Ipsam, aspernatur consequatur.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    }
  }

  enableEdition($event)
  {
    this.editBtn = $event;
  }

  disableEdition($event)
  {
    this.editBtn = $event;
  }
}
