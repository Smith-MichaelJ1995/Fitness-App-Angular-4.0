import * as $ from 'jquery';
import Model from './Model.ts';

export default class View {
    model: Model;

    exercisePanel: JQuery;
    exerciseCompletePanel: JQuery;

    constructor(model: Model) {
        this.model = model;

        this.exercisePanel = $('#my-exercises');
        this.exerciseCompletePanel = $('#my-exercises-completed');
    }

    render() {
        let model = this.model;

        this.exercisePanel.html(
            model.exercises.map(exercise => View.toListItem(exercise.name) )
            .join("")
        );

        this.exerciseCompletePanel.html(
            model.exercisesCompleted.map(exercise => View.toListItem(exercise.name) )
            .join("")
        );
 
        this.addEventListeners();
    }

    addEventListeners() {
        let view = this;
        let model = this.model;

        this.exercisePanel.click('a', function(event) {
            event.preventDefault();
            let aTag = event.originalEvent.srcElement;
            model.moveItem(aTag.textContent);
            view.render();

        })
    }

    private static toListItem(item: string): string {
        return `<a class="list-group-item list-group-item-action">${ item }</a>`;
    }
}