import { Component } from '@angular/core';
import { NavBarItemComponent } from '../../components/nav-bar-item/nav-bar-item.component';

@Component({
  selector: 'app-dashbords',
  standalone: true,
  imports: [NavBarItemComponent],
  templateUrl: './dashbords.component.html',
  styleUrl: './dashbords.component.css'
})
export class DashbordsComponent {

}
