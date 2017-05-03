import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { DxDataGridModule } from 'devextreme-angular';

import { UserDetailComponent } from './../components/user-detail.component';
import { PhotoService } from './../services/photo/photo.service';
import { AlbumService } from './../services/album/album.service';
import { User } from './../models/user';
import { HttpModule } from '@angular/http';

describe('UserDetailComponent', () => {
 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DxDataGridModule,
        HttpModule
      ],
      declarations: [ UserDetailComponent ], // declare the test component
    })
    .compileComponents();  // compile template and css
  }));
  
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(UserDetailComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  
});