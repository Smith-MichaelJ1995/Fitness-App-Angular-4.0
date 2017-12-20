import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { UserService } from '../../services/user-service/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})

/*
export class SignInComponent implements OnInit {

  constructor(private route:RouterModule,private router:Router, private user:UserService) {

  }

  ngOnInit() {
    //console.log('Is user logged in? ',this.user.getUserLoggedIn());
  }

  /*log the user in*/
  /*loginUser(e) {

     e.preventDefault();
     var username = e.target.elements[0].value;
     var password = e.target.elements[1].value;
     //console.log(username, password);

     if(password == 'password')
     {
         this.user.setUserLoggedIn();
         this.user.username = username;
         
         this.router.navigate(['home']);
     }
     else{
        alert('INVALID PASSWORD');
     }

     return false;
  }

}*/
export class SignInComponent {
  user: UserLogin = {
      username: '',
      password: ''
  }

  constructor(private userService: UserService) {}

  login() {
      this.userService.login(this.user);
  }
}

interface UserLogin {
  username: string;
  password: string;
}
