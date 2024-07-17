import { Component } from '@angular/core';
import { UserComponent } from './user.component';
import {ChildComponent} from "./app.child.component";
import {CommentsComponent} from "./comments.component";

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.css'],
  styles: ['.btn { padding: 10px; }'],
  template: `
    <button type="button" [disabled]="isNotUnchanged">No Button</button>
    <button type="button" (click)="On()">0_0</button>
    <button type="button" (click)="Off()">1_1</button>
    <br>
    {{message1}}
    <br>

    <section (mouseover)="onMouseOver()">
      There's a secret message for you, hover to reveal:
      <br>
      {{ message }}
    </section>

    <app-user name="Simran"></app-user>

    <app-child (addItemEvent)="addItem($event)" />
    <p>🐢 all the way down {{ items.length }}</p>

    


    <div>
      <h1>How I feel about Angular</h1>
      <article>
        <p>
          Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
          feature that makes defer loading content the easiest and most ergonomic it could possibly
          be. The Angular community is also filled with amazing contributors and experts that create
          excellent content. The community is welcoming and friendly, and it really is the best
          community out there.
        </p>
      </article>
      @defer (on viewport) {
        <comments />
      } @placeholder {
        <p>Future comments</p>
      } @loading (minimum 2s) {
        <p>Loading comments...</p>
      }
    </div>
  `,
  standalone: true,
  imports: [UserComponent, ChildComponent, CommentsComponent],
})


export class AppComponent {
  isUnchanged = false;
  isNotUnchanged = true;
  message = '';
  message1 ='';
  onMouseOver() {
    this.message = 'Way to go 🚀';
  }
  On() {
    this.message1 = 'You have clicked the button!';
  }

  Off(){
    this.message1 = '';
  }
  items = new Array();

  addItem(item:string){
    this.items.push(item);
  }
}
