import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-nav-bar-item',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar-item.component.html',
  styleUrl: './nav-bar-item.component.css'
})
export class NavBarItemComponent {
 @Input() name: string = "";
 @Input() className: string = "";
}
