import {Component, Input, Output, EventEmitter} from '@angular/core';
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
  @Output() deleteEmitter: EventEmitter<number> = new EventEmitter();

  share(link: string) {
    const url: string = `https://wa.me/?text=${link}`;
    window.open(url, '_blank');
  }

  buy(link: string) {
    window.open(link, '_blank');
  }

  remove(id: number) {
    this.deleteEmitter.emit(id);
  }

  like(product: Product) {
    if (!product.likes) {
      product.likes = 0;
    }

    product.likes += 1;
  }
}
