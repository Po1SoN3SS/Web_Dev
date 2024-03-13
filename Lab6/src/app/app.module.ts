import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/component';
import {AboutComponent} from './about/component';
import {AlbumsComponent} from './albums/logic';
import {AlbumDetailComponent} from './album-detail/logic';
import {AlbumPhotosComponent} from './album-photos/logic';
import {HttpClientModule} from '@angular/common/http';
import {AlbumPreviewComponent} from './album-preview/component';
import {NgOptimizedImage} from "@angular/common";

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		AboutComponent,
		AlbumsComponent,
		AlbumDetailComponent,
		AlbumPhotosComponent,
		AlbumPreviewComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		NgOptimizedImage
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
