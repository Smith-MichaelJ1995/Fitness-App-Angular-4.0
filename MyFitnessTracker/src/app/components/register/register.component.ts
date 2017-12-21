import { Component} from '@angular/core';
import { UserService } from '../../services/user-service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
    user: UserRegistration = {
        firstName: '',
        lastName: '',
        username: '',
        password: ''
    }

    constructor(private userService: UserService) {}

    register() {
        this.userService.register(this.user);
    }
}

interface UserRegistration {
    firstName: string;
    lastName: string;
    username: string;
    password: string;
}