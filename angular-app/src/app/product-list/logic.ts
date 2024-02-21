import {Component} from '@angular/core';

import {products} from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './template.html',
  styleUrls: ['./style.css']
})
export class Logic {
  products = [...products];
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/