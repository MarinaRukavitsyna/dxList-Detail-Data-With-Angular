import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Photo } from './../../models/photo';

import { handleError } from './../services-utils';

@Injectable()
export class PhotoService {
  private photoUrl = 'http://jsonplaceholder.typicode.com/photos';
  constructor(private http: Http) { }
  getPhotos(): Promise<Photo[]> {
    return this.http.get(this.photoUrl)
      .toPromise()
      .then(response =>  response.json() as Photo[])
      .catch(handleError);
  }

  getPhotoUrlById(id: number): String {
       var photoUrl = this.photoUrl + "?userId=" + id;
       return photoUrl;
  }
}