import { Component } from "@angular/core";

@Component({
    selector : 'app-custom',
    imports : [],
    templateUrl : './customcomponent.html',
    styleUrl : './customcomponent.css'
})
export class customcomponent {
    name = 'ankit';
    stream = 'CSE';
    x = 10;
    y = 90;
    z = 100;

    onClickButton(){
        console.log('Button Clicked');
        this.onSecondButton();
    }
    onSecondButton(){
        console.log('Second Button Clicked');
    }
}
