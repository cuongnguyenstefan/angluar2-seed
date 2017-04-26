import {Component, Input, Output, EventEmitter} from "angular2/core"

@Component({
    selector: "vote",
    template: `
        <div class="vote">
            <i class="glyphicon glyphicon-menu-up cursor" 
                (click)="upVote()"
                [class.highlight]="myVote == 1"></i>
            <span class="vote-count">{{ total + myVote }}</span>
            <i class="glyphicon glyphicon-menu-down cursor" 
                (click)="downVote()"
                [class.highlight]="myVote == -1"></i>
        </div>
    `,
    styles: [`
        .vote {
            width: 20px;
        }
        .vote-count {
            font-size: 15px
        }
        .highlight {
            color: yellow;
        }
        .cursor {
            cursor: pointer
        }
    `]
})
export class VoteComponent {
    @Input('total-votes') total = 0;
    @Input('my-vote') myVote = 0;
    @Output() vote = new EventEmitter();
    
    upVote() {
        if (this.myVote == 1) {
            this.myVote -= 1;
        } else {
            this.myVote += 1;
        }
        this.vote.emit({myVote: this.myVote});
    }

    downVote() {
        if (this.myVote == -1) {
            this.myVote += 1;
        } else {
            this.myVote -= 1;
        }
        this.vote.emit({myVote: this.myVote});
    }
}