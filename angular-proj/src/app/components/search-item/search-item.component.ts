import { Component, Input } from '@angular/core';

import { CategoryItemView } from '../../data/models/categoryItemView';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent {
  @Input() category!: CategoryItemView;

  constructor() { }
}
