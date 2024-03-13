import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './about/component';
import {AlbumDetailComponent} from './album-detail/logic';
import {AlbumPhotosComponent} from './album-photos/logic';
import {AlbumsComponent} from './albums/logic';
import {HomeComponent} from './home/component';

const routes: Routes = [{path: "home", component: HomeComponent},
	{path: "about", component: AboutComponent},
	{path: "albums", component: AlbumsComponent},
	{path: "albums/:id", component: AlbumDetailComponent},
	{path: "albums/:id/photos", component: AlbumPhotosComponent},
	{path: "", redirectTo: "home", pathMatch: "full"},
	{path: "**", component: HomeComponent}];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
