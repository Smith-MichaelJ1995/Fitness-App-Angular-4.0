import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user-service/user.service';
@Component({
  selector: 'app-exercise-log',
  templateUrl: './exercise-log.component.html',
  styleUrls: ['./exercise-log.component.scss']
})
export class ExerciseLogComponent implements OnInit {

  submittedEx;
  activeUsers;
  //Exercise Attributes
  exercise: Activity = {
    user: '',
    exerciseName: '',
    timeDuration: '',
    burnedCalories: '',
    exerciseLocation: '',
    description: ''
}

  constructor(private userService:UserService) {
     
  }

  ngOnInit() {
    this.userService.getloggedInUsers().subscribe(res => [
      this.activeUsers = res
    ])


    this.userService.getloggedInUsers().subscribe(response => {
       console.log(response);
      //this.activeUsers = response;
      this.userService.getSubmittedEx().subscribe(res => {
        this.submittedEx = res;
      });
    });
  }

  submitEx()
  {
    this.exercise.user = this.userService.name;
       this.userService.submitExercise(this.exercise).subscribe(res => {
        this.userService.getSubmittedEx().subscribe(res => {
          this.submittedEx = res;
        });
       });
  }
}
/*HOW TO IMPORT EXERCISE OBJECT FROM A MODULES FOLDER*/
interface Activity{
  user:string,
  exerciseName:string,
  timeDuration:string,
  burnedCalories:string,
  exerciseLocation:string,
  description:string
}