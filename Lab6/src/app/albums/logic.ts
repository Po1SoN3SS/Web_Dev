import {Component, OnInit} from '@angular/core';
import {AlbumService} from '../album.service';
import {Album} from "../types";

@Component({
	selector: 'app-albums',
	templateUrl: './template.html',
	styleUrls: ['./style.css']
})
export class AlbumsComponent implements OnInit {
	albums: Album[] = [];

	constructor(private albumService: AlbumService) {
	}

	ngOnInit(): void {
		this.albumService.getAlbums().subscribe((data) => {
			this.albums = data;
		})
	}

	deleteAlbum(id: number) {
		this.albumService.deleteAlbum(id).subscribe(() => {
			this.albums = this.albums.filter((album) => album.id !== id);
		})
	}

	createAlbum(title: string) {
		console.log("CREATE ALBUM ")
		console.log(title)
		let newAlbum: Album = {
			userId: 1,
			id: Number(this.albums.at(this.albums.length - 1)!!.id) + 1,
			title: title,
		};

		this.albumService.createAlbum(newAlbum).subscribe(() => {
			this.albums.push(newAlbum)
			console.log("Album pushed: ")
			console.log(this.albums.at(this.albums.length - 1))
		})
	}
}
