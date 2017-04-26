import {Component, Input, Output} from 'angular2/core'

@Component({
    selector: "heart",
    template: `
        <i
            class="glyphicon glyphicon-heart"
            [class.highlight]="iHeart"
            (click)="onClick()">
        </i>
        <span>{{ total }}</span>
    `,
    styles: [`
        .glyphicon-heart {
            color: "#ccc",
            cursor: pointer;
        }

        .highlight {
            color: deeppink;
        }
    `]
})
export class HeartComponent {
    color = "#ccc";
    @Input('is-hearted') iHeart = false;
    @Input('total-hearts') total = 0;
    onClick() {
        this.total += !this.iHeart ? 1 : -1;
        this.iHeart = !this.iHeart;
    }
}