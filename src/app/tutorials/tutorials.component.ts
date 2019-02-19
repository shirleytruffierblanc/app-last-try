import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.scss']
})
export class TutorialsComponent {
  minutes = 0;
  inc(i: number) {
    this.minutes = Math.min(15, Math.max(0, this.minutes + i));
  }
}
