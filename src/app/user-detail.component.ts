import { Component, Input } from '@angular/core';
import DataSource from 'devextreme/data/data_source';

import { User } from './user';
import { Service } from './app.service';

@Component({
   selector: 'user-detail',
   templateUrl: './user-detail.component.html',
})
export class UserDetailComponent {
    @Input() user: User;
  
    constructor(private service: Service) { }
    
    getAlbumDataSource(id: number): any { 
        return this.service.getAlbumUrlById(id);
    }

    getPhotoDataSource(id: number): any { 
        return this.service.getPhotoUrlById(id);
    }
}