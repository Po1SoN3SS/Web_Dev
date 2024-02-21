import {Component, Input} from '@angular/core';
import {Product} from "../products";

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [],
  templateUrl: './template.html',
  styleUrl: './style.css'
})
export class ProductItemComponent {
  @Input() product!: Product;

  share(link: string) {
    const url: string = `https://wa.me/?text=${link}`;
    window.open(url, '_blank');
  }

  buy(link: string) {
    window.open(link, '_blank');
  }
}
