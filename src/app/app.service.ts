import { Injectable } from '@angular/core';

import { User } from './user';

@Injectable()
export class Service {
    private userUrl = 'http://jsonplaceholder.typicode.com/users';  
    private photoUrl = 'http://jsonplaceholder.typicode.com/photos';
    private albumUrl = 'http://jsonplaceholder.typicode.com/albums';

    getServiceUrl(): String {
    	return this.userUrl;
    }

    getPhotoUrlById(id: number): String {
        var photoUrl = this.photoUrl + "?userId=" + id;
        return photoUrl;
    }

    getAlbumUrlById(id: number): String {
    	var albumUrl = this.albumUrl + "?userId=" + id;
        return albumUrl;
    }
}