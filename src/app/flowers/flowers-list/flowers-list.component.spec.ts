import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowersListComponent } from './flowers-list.component';

describe('FlowersListComponent', () => {
  let component: FlowersListComponent;
  let fixture: ComponentFixture<FlowersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
