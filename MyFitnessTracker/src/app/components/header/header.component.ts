import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user-service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchValue: Search = {
    text: ''
  }

  constructor(public userService:UserService) { }


  ngOnInit() {
   
  }

  search()
  {
    //alert(this.searchValue.text);
    this.userService.search(this.searchValue);
  }

}
interface Search{
  text:string
}
