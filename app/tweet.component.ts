import {Component, Input} from "angular2/core"
import {HeartComponent} from './heart.component'

@Component({
    selector: "tweet",
    template: `
        <div class="media">
            <div class="media-left">
                <a href="#">
                <img class="media-object" [src]="tweet.imageUrl" [alt]="tweet.author">
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading">
                    {{ tweet.author }} <span class="handle">{{ tweet.handle }}</span>
                </h4>
                {{ tweet.body }}
                <div>
                    <heart [is-hearted]="tweet.iLike"  [total-hearts]="tweet.totalLikes" ></heart>
                </div>
            </div>
        </div>
    `,styles: [`
        .handle {
            color: #ccc;
        }
        
        .media {
            margin-bottom: 20px;
        }
        
        .media-object {
            border-radius: 10px;
        }
    `],
     directives: [HeartComponent]
})
export class TweetComponent {
    @Input() tweet;
}