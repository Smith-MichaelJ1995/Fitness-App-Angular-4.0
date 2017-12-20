import * as $ from 'jquery';

import View from './View.ts';
import Model from './Model.ts';

export default class Controller {
    model: Model;
    view: View;

    constructor(model: Model, view: View) {
        this.model = model;
        this.view = view;
    } 

    updateView() {
        this.model.load().then(() =>  this.view.render());
    }
}