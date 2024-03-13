export interface Album {
	userId: number,
	id: number,
	title: string;
}

export interface Photo {
	albumId: number;
	id: number;
	title: string;
	url: string;
	thumbnail: string;
}

export interface User {
	id: number;
	name: string;
	username: string;
	email: string;
	address: object;
	phone: string;
	website: string;
	company: object;
}

export const defaultUser: User = {
	id: 0,
	name: "",
	username: "",
	email: "",
	address: {},
	phone: "",
	website: "",
	company: {},
}
