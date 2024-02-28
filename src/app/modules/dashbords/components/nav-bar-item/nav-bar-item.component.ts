import { Component, Input} from '@angular/core';
import { SvgModule } from '../../../../shared/ui/svg/svg.module';

@Component({
  selector: 'app-nav-bar-item',
  standalone: true,
  imports: [SvgModule],
  templateUrl: './nav-bar-item.component.html',
  styleUrl: './nav-bar-item.component.css'
})
export class NavBarItemComponent {
 @Input() name: string = "";
 @Input() className: string = "";
 @Input() url: string = "";
}
