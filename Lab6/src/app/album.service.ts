import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Album, Photo, User} from "./types";

const fakeUrl: string = "https://jsonplaceholder.typicode.com"

@Injectable({
	providedIn: 'root'
})
export class AlbumService {
	constructor(private request: HttpClient) {
	}

	getAlbums(): Observable<Album[]> {
		return this.request.get<Album[]>(`${fakeUrl}/albums`);
	}

	getAlbum(id: number): Observable<Album> {
		return this.request.get<Album>(`${fakeUrl}/albums/${id}`);
	}

	getUser(id: number): Observable<User> {
		return this.request.get<User>(`${fakeUrl}/users/${id}`);
	}

	deleteAlbum(id: number): Observable<Album> {
		return this.request.delete<Album>(`${fakeUrl}/albums/${id}`);
	}

	updateAlbum(album: Album) {
		return this.request.put<Album>(`${fakeUrl}/albums/${album.id}`, album);
	}

	createAlbum(album: Album) {
		return this.request.post<Album>(`${fakeUrl}/albums`, album);
	}

	getPhotos(albumId: number): Observable<Photo[]> {
		return this.request.get<Photo[]>(`${fakeUrl}/albums/${albumId}/photos`);
	}
}
