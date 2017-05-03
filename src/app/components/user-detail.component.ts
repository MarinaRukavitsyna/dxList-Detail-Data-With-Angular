import { Component, Input} from '@angular/core';
import DataSource from 'devextreme/data/data_source';

import { PhotoService } from './../services/photo/photo.service';
import { AlbumService } from './../services/album/album.service';
import { User } from './../models/user';

@Component({
   selector: 'user-detail',
   templateUrl: './user-detail.component.html',
   providers: [
        AlbumService,
        PhotoService
   ]
})
export class UserDetailComponent {
    @Input() user: User;

    constructor(
        private photoService: PhotoService,
        private albumService: AlbumService
      ) { }
    
    getAlbumDataSource(id: number): any { 
        return this.albumService.getAlbumUrlById(id);
    }

    getPhotoDataSource(id: number): any { 
        return this.photoService.getPhotoUrlById(id);
    }
}