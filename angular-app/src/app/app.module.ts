import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

import {MainComponent} from './main';
import {TopBarComponent} from './top-bar/logic';
import {Logic} from './product-list/logic';
import {ProductItemComponent} from "./product-item/logic";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: Logic},
    ]),
    ProductItemComponent
  ],
  declarations: [
    MainComponent,
    TopBarComponent,
    Logic
  ],
  bootstrap: [
    MainComponent
  ]
})
export class AppModule {
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
