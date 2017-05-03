import { TestBed, ComponentFixture, async, fakeAsync, tick } from '@angular/core/testing';
import { DxListModule, DxTemplateModule, DxDataGridModule } from 'devextreme-angular';

import { AppComponent } from './app.component';
import { UserDetailComponent } from './components/user-detail.component';
import { User } from './models/user';
import { UserService } from './services/user/user.service';
import { USERS } from './services/user/mock-users';
import { HttpModule } from '@angular/http';

class UserServiceSpy {
  getUsers = jasmine.createSpy('getUsers').and.callFake(
    () => Promise
      .resolve(USERS)
  );
}

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DxListModule,
        DxTemplateModule,
        DxDataGridModule,
        HttpModule
      ],
      declarations: [ AppComponent, UserDetailComponent ], 
    })
    .overrideComponent(AppComponent, {
        set: {
          providers: [
            { provide: UserService, useClass: UserServiceSpy }
          ]
        }
    })
    .compileComponents();  // compile template and css
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });
  
  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should render DxList', fakeAsync(() => {
    tick();
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.dx-list')).toBeTruthy();
  }));
  
});