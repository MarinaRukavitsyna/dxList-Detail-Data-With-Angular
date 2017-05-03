import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Album } from './../../models/album';

import { handleError } from './../services-utils';

@Injectable()
export class AlbumService {
  private albumUrl = 'http://jsonplaceholder.typicode.com/albums';
  constructor(private http: Http) { }
  getAlbums(): Promise<Album[]> {
    return this.http.get(this.albumUrl)
      .toPromise()
      .then(response =>  response.json() as Album[])
      .catch(handleError);
  }
  getAlbumsById(id: number): Promise<Album[]> {
    // TO-D: add parameters
    return this.http.get(this.albumUrl)
      .toPromise()
      .then(response =>  response.json() as Album[])
      .catch(handleError);
  }

  getAlbumUrlById(id: number): String {
      var albumUrl = this.albumUrl + "?userId=" + id;
      return albumUrl;
  }
}