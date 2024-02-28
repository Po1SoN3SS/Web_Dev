import {Component} from '@angular/core';

import {categories, Category} from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './template.html',
  styleUrls: ['./style.css']
})
export class Logic {
  categories = [...categories];

  selectedCategory: Category = new Category("Empty category", []);

  onRemove(removed_id: number) {
    this.selectedCategory.prod_list = this.selectedCategory.prod_list.filter(product => product.id != removed_id);
  }
}
