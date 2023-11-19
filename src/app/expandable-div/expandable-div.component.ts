// expandable-div.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-expandable-div',
  templateUrl: './expandable-div.component.html',
  styleUrls: ['./expandable-div.component.css']
})
export class ExpandableDivComponent {
  @Input() initialHeight: string = "10px";
  @Input() text: string = "";
  expanded = false;

  toggleExpansion() {
    this.expanded = !this.expanded;
  }
}
