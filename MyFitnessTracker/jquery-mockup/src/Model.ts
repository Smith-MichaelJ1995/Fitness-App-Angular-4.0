import * as $ from 'jquery';

export class Ex {
    name: string
}

export default class Model {
    exercises: Ex[]
    exercisesCompleted: Ex[]

    constructor() {
        this.exercises = [];
        this.exercisesCompleted = [];
    }

    load(): Promise<JQuery.jqXHR> {
        return $.when(
            $.getJSON("/ExerciseLog/exercises").done( data =>{
                this.exercises = data;
            }),
            $.getJSON("/ExerciseLog/exercises_complete").done( data =>{
                this.exercisesCompleted = data;
            })
        );
    }

    moveItem(param: string) {
        this.exercises.forEach((element, index) => {
            if(element.name === param)
            {
                this.exercises.splice(index, 1);
                this.exercisesCompleted.push({ name: param });
            }
        });
      }

}