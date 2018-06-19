import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { ProservComponent } from './proserv.component';
import { AppService } from '../app.service';

const ROUTES = [
  {
    path: 'proserv',
    component: ProservComponent
  }
];


describe('ProservComponent', () => {
  let component: ProservComponent;
  let fixture: ComponentFixture<ProservComponent>;
  let appServiceStub: Partial<AppService>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProservComponent ],
      providers: [
        {provide: AppService, useValue: appServiceStub }
      ],
      imports: [
        RouterModule.forRoot(ROUTES, {useHash: true})
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
