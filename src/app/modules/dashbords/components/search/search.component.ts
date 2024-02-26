import { Component } from '@angular/core';
import { SvgModule } from '../../../../shared/ui/svg/svg.module';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [SvgModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

}
