import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

const BASE_ADDRESS = 'http://localhost:3001/auth';
const TOKEN_KEY = 'token';
const NAME_KEY = 'name';

@Injectable()
export class UserService {

  //construct user object
  constructor(private http: HttpClient, private router: Router) {}


  submitExercise(exercise) {
      return this.http.post(BASE_ADDRESS + '/addexercise', exercise);
  }

  getSubmittedEx() {
      return this.http.get(BASE_ADDRESS + '/exercises');
  }

  register(user) {
      const response = {} 
      this.http.post(BASE_ADDRESS + '/register', user).subscribe(response => {
          this.router.navigate(['']);
      });
    
  }

  login(user) {
    this.http.post<ServerResponse>(BASE_ADDRESS + '/login', user).subscribe(response => {
        if (!response.token) return;

        

        localStorage.setItem(NAME_KEY, response.name);
        localStorage.setItem(TOKEN_KEY, response.token);

        this.router.navigate(['/home']);
    });
  }

  //return status whether user is logged in 
  get isLoggedIn() {
      return !!localStorage.getItem(TOKEN_KEY);
  }

  get name() {
      return localStorage.getItem(NAME_KEY);
  }

  getloggedInUsers() {
      return this.http.get(BASE_ADDRESS + '/loggedinusers');
  }
}

interface ServerResponse {
    status: string;
    message: string;
    token?: string;
    name?: string;
}