import { Component} from '@angular/core';
import { UserService } from '../../services/user-service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
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