import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user-service/user.service';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.scss']
})
export class TutorialsComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit() {
  }

}
