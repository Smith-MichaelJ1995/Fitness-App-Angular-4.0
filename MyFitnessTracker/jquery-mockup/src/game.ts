import * as $ from 'jquery';
import Model from './Model.ts';
import View from './View.ts';
import Controller from './Controller.ts'

let model: Model = new Model();
let view: View = new View(model);
let controller: Controller = new Controller(model, view);
controller.updateView();

// export class ActivityManager {
//     exercises: Ex[] = [];
//     completed_exercises: ExComplete[] = [];

//     init() {     //everything inside .when being sent to client
//         return $.when(
//             $.getJSON("/ExerciseLog/exercises").done( data =>{
//                 this.exercises = data;
//             }),
//             $.getJSON("/ExerciseLog/exercises_complete").done( data =>{
//                 this.completed_exercises = data;
//             })
//         );
//     }

//     /*my-exercises-completed*/
//     displayExercises(){
//         $("#my-exercises").html(
//             this.exercises.map( x => `<a class="list-group-item list-group-item-action">${x.name}</a>` ).join("")
//         );  
//     }
//     displayExercisesComplete(){
//         $("#my-exercises-completed").html(
//             this.completed_exercises.map( x => `<a class="list-group-item list-group-item-action">${x.name}</a>` ).join("")
//         );  
//     }
// }


// Controller
// const activities = new ActivityManager();
// var i = 0;

// activities.init().done(()=>{
    

//     activities.displayExercises();
//     activities.displayExercisesComplete();
//     //get the parent div, get children, each function
    
// });


