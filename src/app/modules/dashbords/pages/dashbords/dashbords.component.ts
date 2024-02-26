import { Component } from '@angular/core';
import { NavBarItemComponent } from '../../components/nav-bar-item/nav-bar-item.component';
import { SearchComponent } from '../../components/search/search.component';

@Component({
  selector: 'app-dashbords',
  standalone: true,
  imports: [NavBarItemComponent, SearchComponent],
  templateUrl: './dashbords.component.html',
  styleUrl: './dashbords.component.css'
})
export class DashbordsComponent {

}
