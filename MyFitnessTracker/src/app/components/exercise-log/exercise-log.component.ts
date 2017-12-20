import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user-service/user.service';
@Component({
  selector: 'app-exercise-log',
  templateUrl: './exercise-log.component.html',
  styleUrls: ['./exercise-log.component.scss']
})
export class ExerciseLogComponent implements OnInit {

  //Exercise Attributes
  activities:Activity[];
  activeUsers;

  constructor(private userService:UserService) {}

  ngOnInit() {
    this.userService.getloggedInUsers().subscribe(response => {
      this.activeUsers = response;
    });
  }

  // onSubmit(name,duration,calsburned,location,description) {
    //console.log(name);
    //console.log(duration);
    //console.log(calsburned);
    //console.log(location);
    //console.log(description);

  //   var exercise: Activity = ({user:'Michael',
  //     exerciseName:name,
  //     timeDuration:duration,
  //     burnedCalories:calsburned,
  //     exerciseLocation:location,
  //     description:description });


  //     //check if this identical activity has already been added to the list
  //     if(!(this.verifyNewActivity(exercise,this.activities)))
  //     {
  //       this.activities.push(exercise);
  //     }

  //   return false;
  // }

  //check if the identical activity has been added to the list
  verifyNewActivity(exercise, activities){
    for(let ex of this.activities)
    {
       if(ex.user === exercise.user)
       {
          if(ex.timeDuration === exercise.timeDuration)
          {
             if(ex.exerciseName === exercise.exerciseName)
             {
                if(ex.exerciseLocation === exercise.exerciseLocation)
                {
                   if(ex.description == exercise.description)
                   {
                     if(ex.burnedCalories === exercise.burnedCalories)
                     {
                        return true;
                     }
                   }
                }
             }
          }
       }
    }
    return false;
  }

}

/*HOW TO IMPORT EXERCISE OBJECT FROM A MODULES FOLDER*/
interface Activity{
  user:string,
  exerciseName:string,
  timeDuration:string,
  burnedCalories:number,
  exerciseLocation:string,
  description:string
}