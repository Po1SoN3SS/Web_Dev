import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AlbumService} from '../album.service';
import {Album, defaultUser, User} from "../types";

@Component({
	selector: 'app-album-preview',
	templateUrl: './template.html',
	styleUrls: ['./style.css']
})
export class AlbumPreviewComponent implements OnInit {
	@Input() album!: Album;
	@Output() deleteAlbum = new EventEmitter<number>();
	user: User = defaultUser;

	constructor(private albumService: AlbumService) {
	}

	ngOnInit(): void {
		this.albumService.getUser(this.album.userId).subscribe((data) => {
			this.user = data;
		})
	}

	delete(): void {
		this.deleteAlbum.emit(this.album.id);
	}
}
