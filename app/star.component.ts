import {Component, Input} from "angular2/core"

@Component({
    selector: 'star',
    template: `
        <i class="glyphicon" [class.glyphicon-star]="like" [class.glyphicon-star-empty]="!like" (click)="toggleLike()" >
        </i>
    `
})
export class StarComponent {
    @Input() like = false;
    toggleLike() {
        this.like = !this.like;
    }
}