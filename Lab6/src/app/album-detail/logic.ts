import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AlbumService} from '../album.service';
import {Location} from '@angular/common';
import {Album, defaultUser, User} from "../types";

@Component({
	selector: 'app-album-detail',
	templateUrl: './template.html',
})
export class AlbumDetailComponent implements OnInit {
	album!: Album;
	user: User = defaultUser;
	id: number = 0;

	constructor(private route: ActivatedRoute, private albumService: AlbumService, private location: Location) {
	}

	ngOnInit(): void {
		const id = Number(this.route.snapshot.paramMap.get('id'));
		this.albumService.getAlbum(id).subscribe(album =>
			this.album = album
		);
	}

	clickBack() {
		this.location.back();
	}

	clickSave(newTitle: string) {
		this.album.title = newTitle;
		this.albumService.updateAlbum(this.album).subscribe((newAlbum) => {
			this.album = newAlbum;
		})
	}
}
